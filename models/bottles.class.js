class Bottles extends MovableObject {

    height = 110;
    width = 80;

    IMAGES_BOTTLES = [
        'img/6.botella/2.Botella_enterrada1.png',
        'img/6.botella/2.Botella_enterrada2.png'
    ];



    constructor(x, y) {
        super().loadImage('img/6.botella/1.Marcador.png');
        this.loadImages(this.IMAGES_BOTTLES);
        this.x = Math.random() * 2000 - 150; //math.random() generiert eine zufällige Zahl zwischen 200-700
        this.y = Math.random() * 350;
    }

}