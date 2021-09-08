class Coins extends MovableObject {

    height = 200;
    width = 200;



    constructor(x, y) {
        super().loadImage('img/8.Coin/Moneda1.png');

        // this.x = Math.random() * 500; //math.random() generiert eine zufällige Zahl zwischen 200-700
        // this.y = Math.random() * 350;

        this.x = x;
        this.y = y;

    }

}