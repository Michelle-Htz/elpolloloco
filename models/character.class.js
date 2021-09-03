class Character extends MovableObject {
    height = 350;
    width = 140;
    y = 60;
    speed = 10;
    IMAGES_WALKING = [
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-22.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-23.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-24.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-25.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-26.png'
    ];

    world; //Damit die Verküpfung klappt muss die Variable world auch hier angelegt sein. 

    constructor() {
        super().loadImage('img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png');
        this.loadImages(this.IMAGES_WALKING);

        this.animate();
    }

    animate() {

        setInterval(() => {
            if (this.world.keyboard.RIGHT) {
                this.x += this.speed;
                this.otherDirection = false;
            }
            if (this.world.keyboard.LEFT) {
                this.x -= this.speed;
                this.otherDirection = true;
            }
            this.world.camera_x = -this.x;
        }, 1000 / 60);
        //mein soll dem IMG aus dem Chache entsprechen soll 
        setInterval(() => {
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) { // || = logisches Oder
                //Lauf Animation
                let i = this.currentImage % this.IMAGES_WALKING.length;
                //i ist der Wert der sich erhöht und IMAGES WALK ist die Länge des Array. 
                // % = Mathematischerrest, wenn der Wert i die Länge des Array übersteigt gängt er wieder bei Null an. 
                // so entsteht eine Schleife
                // i = 0, 1, 2, 3, 4, 5, 0
                let path = this.IMAGES_WALKING[i]; //der aktuelle Pfad/Bild
                this.img = this.imageCache[path]; //Das Bild wird hineingesetzt in den Chache
                this.currentImage++; //Es wird immer um eins erhöht     
            }
        }, 50);
    }






    jump() {

    }
}