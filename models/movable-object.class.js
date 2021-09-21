class MovableObject {
    x = 50;
    y = 250;
    height = 180;
    width = 80;
    img;
    imageCache = {}; //Eine JSON in dem die Bilder gespeichert sind
    currentImage = 0;
    speed = 0.15;
    otherDirection = false; //Übergreifende Variable zum Spiegeln der Bilder. 
    speedY = 0;
    acceleration = 2;


    applyGravity() {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    isAboveGround() {
        return this.y < 180;
    }


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr) { //Es wird ein Array/JSON in die Funktion herrein gegeben
        arr.forEach((path) => { // Entsprechend der Bilderanzahlt wird die Schleife wiederholt. //Path hat den Wert vom ersten Bild. 
            let img = new Image(); //Es wird eine Variable mit neuem Bild angelegt.
            img.src = path; //das Img Objekt wird in das img.src reingeladen.
            this.imageCache[path] = img; //this = die Variable ist überall gültig //ohne this die Variable ist nur in der Funktion gültig
        });
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
        this.speedY = 30;
    }
}