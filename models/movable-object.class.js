class MovableObject extends DrawableObject {

    speed = 0.15;
    otherDirection = false; //Übergreifende Variable zum Spiegeln der Bilder. 
    speedY = 0;
    acceleration = 2.5;
    energy = 100;
    lastHit = 0;


    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    isAboveGround() {
        if (this instanceof ThrowableObject) {
            return true;
        } else {
            return this.y < 150;
        }
    }

    moveRight() {
        this.x += this.speed;
    }


    moveLeft() {
        this.x -= this.speed;
    }


    playAnimation(images) {
        let i = this.currentImage % images.length;
        //i ist der Wert der sich erhöht und IMAGES WALK ist die Länge des Array. 
        // % = Mathematischerrest, wenn der Wert i die Länge des Array übersteigt gängt er wieder bei Null an. 
        // so entsteht eine Schleife
        // i = 0, 1, 2, 3, 4, 5, 0
        let path = images[i]; //der aktuelle Pfad/Bild
        this.img = this.imageCache[path]; //Das Bild wird hineingesetzt in den Chache
        this.currentImage++; //Es wird immer um eins erhöht     
    }

    jump() {
        this.speedY = 25;
    }

    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height
    }

    hit() {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime(); //Zeit wird in Zahlenform gespeichert.
            //so kann ich in der isHurt Funktion wissen welche Zeitspanne vergangen ist. 
        }
    }

    isDead() {
        return this.energy == 0;
    }

    isHurt() {
        let timepassed = new Date().getTime() - this.lastHit; //Diference in Ms
        //die aktuelle Zeit wird genommen und der letzte Schlag wird von ihr abgezogen. 
        timepassed = timepassed / 1000; //Diferenz in Sekunden
        return timepassed < 1;
    }
}