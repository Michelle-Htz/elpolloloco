class Chicken extends MovableObject {

    height = 80;
    width = 70;
    y = 315;
    energy = 5;



    IMAGES_WALKING = [
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
        'img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png'
    ];

    IMAGE_DEAD = ['img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/4.G_muerte.png'];

    chicken_sound = new Audio('audio/chicken.mp3');

    constructor() {
        //super() benutzt man, wenn man Methoden des übergeordnete Objekt aufruft
        super().loadImage('img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGE_DEAD);

        this.x = 500 + Math.random() * 500; //math.random() generiert eine zufällige Zahl zwischen 200-700
        this.speed = 0.15 + Math.random() * 0.5;

        this.animate();
    }
    animate() {
        setInterval(() => { //Jede Sekunde wird die Funktion neu ausgeführt
            this.moveLeft();
        }, 60); //es wird 60 mal pro Sekunde abgezogen  


        setInterval(() => {
            if (this.energy == 0) {
                this.playAnimation(this.IMAGE_DEAD);
            } else {
                this.playAnimation(this.IMAGES_WALKING);
            }

        }, 60);
    }

}