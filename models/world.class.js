class World {
    character = new Character();
    level = level1; //Es wird auf alle Variablen als Level 1 zugegriffen
    canvas;
    ctx;
    keyboard;
    camera_x = 0; //Variable die die ganze Welt (Canvas) verschiebt.

    constructor(canvas, keyboard) { //Das Keyboard muss ebenfalls an den Constructor weitergegeben werden. 
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas; //das obere Canvas wird in dieses Canvas reingeschrieben, so kann ich mit this auf height und width zugreifen. 
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();

    }

    setWorld() { //Die Funktion übergibt this, damit die aktuelle Welt weitergegeben wird. 
        this.character.world = this;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); //Canvas wird immer wieder geleert
        this.ctx.translate(this.camera_x, 0); //Der Ausschnitt wird 100 Px nach Links verschoben.
        //Dann malen wir alle Objekte
        this.addObjectsToMap(this.level.backgroundObjects);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.coin);
        this.addObjectsToMap(this.level.bottel);
        this.addObjectsToMap(this.level.enemies);
        this.addToMap(this.character);

        this.ctx.translate(-this.camera_x, 0); //Dann schieben wir unseren ctx wieder nach rechts. 





        //draw wird immer wieder aufgerufen
        let self = this; //in dieser Funktion kennt er this nicht mehr daher wird eine neue Variable erstellt und diese kann ich weiter geben.
        requestAnimationFrame(function() { //Diese Funktion wird etwas später ausgeführt, nachdem bereits alles geladen wurde.
            self.draw();

        });

    }

    addObjectsToMap(objects) {
        objects.forEach(o => {
            this.addToMap(o);
        })
    }

    addToMap(mo) {
        //diese If Abfrage nimmt das umdrehen des Bildes vor. 
        if (mo.otherDirection) { //es wird überprüft ob, das Objekt eine andere Richtung hat, wenn ja dann...
            this.ctx.save(); //speichern wir die aktuelle Einstellung
            this.ctx.translate(mo.width, 0); //Das Canvas wird um die Breite des Characters verschoben.
            this.ctx.scale(-1, 1);
            mo.x = mo.x * -1; //Die X Koordinate wird umgedreht
        }
        this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
        //Jetzt wird es wieder Rückgängig gemacht, damit nicht alle Bilder gespiegelt angezeigt werden.
        if (mo.otherDirection) {
            mo.x = mo.x * -1;
            this.ctx.restore();
        }
    }

}