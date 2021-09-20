class Character extends MovableObject {
    height = 250;
    width = 120;
    y = 80;
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

    walking_sound = new Audio('audio/walking.mp3');

    constructor() {
        super().loadImage('img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png');
        this.loadImages(this.IMAGES_WALKING);
        this.applyGravity()
        this.animate();
    }

    animate() {

        setInterval(() => {
            this.walking_sound.pause();
            if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                //&& = x kleiner als (700) dann darf er nicht weiter laufen.
                this.x += this.speed;
                this.otherDirection = false;
                this.walking_sound.play();
            }
            if (this.world.keyboard.LEFT && this.x > 0) {
                this.walking_sound.pause();
                //nur wenn x größer als Null ist kann er nach links laufen, ansonsten bleibt er stehen.
                //&& = und x muss kleiner sein als wold.level_end_x (700)
                this.x -= this.speed;
                this.otherDirection = true;
                this.walking_sound.play();
            }
            this.world.camera_x = -this.x + 100; //+100 schiebt den Character weiter nach rechts. 
        }, 1000 / 60);
        //mein soll dem IMG aus dem Chache entsprechen soll 
        setInterval(() => {
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) { // || = logisches Oder
                //Lauf Animation
                this.playAnimation(this.IMAGES_WALKING);
            }
        }, 50);
    }






    jump() {

    }
}