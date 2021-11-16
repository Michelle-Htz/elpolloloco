class World {
    character = new Character();
    // endboss = new Endboss();
    level = level1; //Es wird auf alle Variablen als Level 1 zugegriffen
    canvas;
    ctx;
    keyboard;
    camera_x = 0; //Variable die die ganze Welt (Canvas) verschiebt.
    lifeBar = new LifeBar();
    coinBar = new CoinBar();
    bottleBar = new BottleBar();
    endbosslifebar = new EndbossLifeBar();
    throwableObjects = [];
    coinAmount = 0;
    bottleAmount = 0;

    constructor(canvas, keyboard) { //Das Keyboard muss ebenfalls an den Constructor weitergegeben werden. 
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas; //das obere Canvas wird in dieses Canvas reingeschrieben, so kann ich mit this auf height und width zugreifen. 
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();

    }

    setWorld() { //Die Funktion übergibt this, damit die aktuelle Welt weitergegeben wird. 
        this.character.world = this;
    }

    run() {
        setInterval(() => {
            this.checkCollisions();
            this.checkThrowObjects();
        }, 60);
    }

    checkThrowObjects() {
        if (this.keyboard.D && this.bottleAmount > 0) {
            let bottles = new ThrowableObject(this.character.x + 100, this.character.y);
            this.throwableObjects.push(bottles);
            this.bottleAmount--;
            this.bottleBar.setCollectedBottles(this.bottleAmount);
        }
    }

    checkCollisions() {
        this.checkCollisionsEnemies();
        this.checkCollisionsCoins();
        this.checkCollisionsBottles();
        this.checkCollisionThrowableObjectsWithEndboss();
        this.checkCollisionThrowableObjectsWithChickens();
        this.checkThrowObjects();
    }


    checkCollisionsEnemies() {
        this.level.enemies.forEach((enemy) => {
            if (!(this.character.isDead() || enemy.isDead()) && this.character.isColliding(enemy)) {
                if (this.character.isStamping(enemy)) {
                    this.destroyEnemy(enemy);
                } else {
                    this.character.hit();
                    this.lifeBar.setPercentage(this.character.energy);
                }
            }

            // this.throwableObjects.forEach(throwableObjects => {
            //     if (throwableObjects.isColliding(enemy) && !enemy.isDead()) {
            //         this.destroyEnemy(enemy);
            //         if (enemy instanceof Endboss) {
            //             this.endboss.hit();
            //             this.endbosslifebar.setPercentage(this.endboss.energy)
            //         } else {
            //             this.destroyEnemy(enemy);
            //         }
            //     }
            // });
        })
    }

    checkCollisionsCoins() {
        this.level.coin.forEach((coin) => {
            if (this.character.isColliding(coin)) {
                this.level.coin.splice(this.level.coin.indexOf(coin), 1);
                this.coinAmount++;
                this.coinBar.setCollectedCoins(this.coinAmount);
            }
        })
    }


    checkCollisionsBottles() {
        this.level.bottel.forEach((bottel) => {
            if (this.character.isColliding(bottel)) {
                this.level.bottel.splice(this.level.bottel.indexOf(bottel), 1);
                this.bottleAmount++;
                this.bottleBar.setCollectedBottles(this.bottleAmount);
            }
        });
    }

    checkCollisionThrowableObjectsWithChickens() {
        this.throwableObjects.forEach((throwableObject) => {
            this.level.enemies.forEach((enemy) => {
                if (throwableObject.isColliding(enemy)) {
                    if (enemy instanceof Chicken) {
                        let position = this.level.enemies.indexOf(enemy);
                        enemy.energy = 0;
                        setTimeout(() => {
                            this.level.enemies.splice(position, 1)
                        }, 60);
                    }
                }
            });
        });
    }

    checkCollisionThrowableObjectsWithEndboss() {
        this.throwableObjects.forEach((throwableObject) => {
            let endboss = this.level.enemies[this.level.enemies.length - 1];
            if (!endboss.isDead()) {
                if (throwableObject.isColliding(endboss)) {
                    endboss.hit();
                    this.endbosslifebar.setPercentage(endboss.energy);
                }
            }
        })

    }




    destroyEnemy(enemy) {
        enemy.energy = 0;
    }


    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); //Canvas wird immer wieder geleert

        this.ctx.translate(this.camera_x, 0); //Der Ausschnitt wird 100 Px nach Links verschoben.
        //Dann malen wir alle Objekte
        this.addObjectsToMap(this.level.backgroundObjects);

        this.ctx.translate(-this.camera_x, 0);
        this.addToMap(this.lifeBar);
        this.addToMap(this.coinBar);
        this.addToMap(this.bottleBar);
        this.addToMap(this.endbosslifebar);

        this.ctx.translate(this.camera_x, 0);

        this.addToMap(this.character);

        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.coin);
        this.addObjectsToMap(this.level.bottel);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.throwableObjects);

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
            this.flipImage(mo);
        }
        mo.draw(this.ctx);
        mo.drawFrame(this.ctx);


        if (mo.otherDirection) {
            this.flipImageBack(mo);
        }
    }

    flipImage(mo) {
        this.ctx.save(); //speichern wir die aktuelle Einstellung
        this.ctx.translate(mo.width, 0); //Das Canvas wird um die Breite des Characters verschoben.
        this.ctx.scale(-1, 1);
        mo.x = mo.x * -1; //Die X Koordinate wird umgedreht
    }

    flipImageBack(mo) {
        mo.x = mo.x * -1;
        this.ctx.restore();
    }

}