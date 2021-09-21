class Bottles extends MovableObject {

    height = 110;
    width = 80;



    constructor(x, y) {
        super().loadImage('img/6.botella/1.Marcador.png');

        this.x = Math.random() * 2000 - 150; //math.random() generiert eine zufällige Zahl zwischen 200-700
        this.y = Math.random() * 350;
    }

}