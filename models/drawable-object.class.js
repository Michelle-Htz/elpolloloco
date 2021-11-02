class DrawableObject {
    img;
    imageCache = {}; //Eine JSON in dem die Bilder gespeichert sind
    currentImage = 0;
    x = 50;
    y = 250;
    height = 180;
    width = 80;


    drawFrame(ctx) {

        if (this instanceof Character || this instanceof Chicken) {
            ctx.beginPath();
            ctx.lineWidth = "5";
            ctx.strokeStyle = "blue";
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }

    }


    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

    loadImages(arr) { //Es wird ein Array/JSON in die Funktion herrein gegeben
        arr.forEach((path) => { // Entsprechend der Bilderanzahlt wird die Schleife wiederholt. //Path hat den Wert vom ersten Bild. 
            let img = new Image(); //Es wird eine Variable mit neuem Bild angelegt.
            img.src = path; //das Img Objekt wird in das img.src reingeladen.
            this.imageCache[path] = img; //this = die Variable ist überall gültig //ohne this die Variable ist nur in der Funktion gültig
        });
    }
}