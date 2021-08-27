class World {
    character = new Character();
    enemies = [
        new Chicken(),
        new Chicken(),
        new Chicken(),
    ];
    clouds = [
        new Cloud(),
    ];
    canvas;
    ctx;

    constructor(canvas) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas; //das obere Canvas wird in dieses Canvas reingeschrieben, so kann ich mit this auf height und width zugreifen. 
        this.draw();

    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); //Canvas wird immer wieder geleert
        this.ctx.drawImage(this.character.img, this.character.x, this.character.y, this.character.width, this.character.height);
        this.enemies.forEach(enemy => { //es wird auf jedes Chicken einzeln zugegriffen
            this.ctx.drawImage(enemy.img, enemy.x, enemy.y, enemy.width, enemy.height);
        });

        this.clouds.forEach(cloud => {
            this.ctx.drawImage(cloud.img, cloud.x, cloud.y, cloud.width, cloud.height);
        });


        //draw wird immer wieder aufgerufen
        let self = this; //in dieser Funktion kennt er this nicht mehr daher wird eine neue Variable erstellt und diese kann ich weiter geben.
        requestAnimationFrame(function() { //Diese Funktion wird etwas später ausgeführt, nachdem bereits alles geladen wurde.
            self.draw();

        });

    }
}