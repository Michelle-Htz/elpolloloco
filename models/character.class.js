class Character extends MovableObject {
    height = 250;
    width = 150;
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

    IMAGES_JUMPING = [
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-31.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-32.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-33.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-34.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-35.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-36.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-37.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-38.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-39.png'

    ];

    world; //Damit die Verküpfung klappt muss die Variable world auch hier angelegt sein. 

    walking_sound = new Audio('audio/walking.mp3');

    constructor() {
        super().loadImage('img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);

        this.applyGravity();
        this.animate();
    }

    animate() {

        setInterval(() => {
            if (this.isAboveGround()) {
                //Immer wenn er sich über dem Boden befindet spiele ich die Bilder aus dem zweiten Array ab. 
                this.playAnimation(this.IMAGES_JUMPING);
            } else {

                this.walking_sound.pause();
                if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
                    this.moveRight();
                    //&& = x kleiner als (700) dann darf er nicht weiter laufen.
                    this.walking_sound.play();
                    this.otherDirection = false;
                }
                if (this.world.keyboard.LEFT && this.x > 0) {
                    this.walking_sound.pause();
                    //nur wenn x größer als Null ist kann er nach links laufen, ansonsten bleibt er stehen.
                    //&& = und x muss kleiner sein als wold.level_end_x (700)
                    this.moveLeft();
                    this.walking_sound.play();
                    this.otherDirection = true;
                }


                if (this.world.keyboard.UP || this.world.keyboard.SPACE && !this.isAboveGround()) {
                    //wenn wir die Space Taste drücken und unser Character ist nicht über dem Boden, dann springen wir, deshalb das Ausrufezeichen davor
                    this.jump();
                }
                this.world.camera_x = -this.x + 100; //+100 schiebt den Character weiter nach rechts. 
            }
        }, 1000 / 60);
        //mein soll dem IMG aus dem Chache entsprechen soll 
        setInterval(() => {
            if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) { // || = logisches Oder
                //Lauf Animation
                this.playAnimation(this.IMAGES_WALKING);
            } else {
                if (this.isAboveGround()) {
                    this.playAnimation(this.IMAGES_JUMPING);
                }
            }
        }, 50);
    }

}