class MovableObject {
    x = 50;
    y = 220;
    height = 180;
    width = 80;
    img;
    imageCache = {}; //Eine JSON in dem die Bilder gespeichert sind
    currentImage = 0;
    speed = 0.15;
    otherDirection = false; //Übergreifende Variable zum Spiegeln der Bilder. 

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
        console.log('Moving right');

    }


    moveLeft() {
        setInterval(() => { //Jede Sekunde wird die Funktion neu ausgeführt
            this.x -= this.speed; //Geschwindigkeit
        }, 1000 / 60); //es wird 60 mal pro Sekunde abgezogen  
    }
}