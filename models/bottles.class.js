class Bottles extends MovableObject {

    height = 110;
    width = 110;



    constructor(x, y) {
        super().loadImage('img/6.botella/1.Marcador.png');

        // this.x = Math.random() * 500; //math.random() generiert eine zufällige Zahl zwischen 200-700
        // this.y = Math.random() * 350;

        this.x = x;
        this.y = y;

    }

}