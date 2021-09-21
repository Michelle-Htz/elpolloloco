class Coins extends MovableObject {

    height = 150;
    width = 150;

    IMAGES_COINS = [
        'img/8.Coin/Moneda1.png',
        'img/8.Coin/Moneda2.png'
    ]

    constructor() {
        super().loadImage('img/8.Coin/Moneda1.png');
        this.loadImages(this.IMAGES_COINS);

        this.x = (Math.random() * 2000) - 150; //math.random() generiert eine zufällige Zahl zwischen 200-700
        this.y = Math.random() * 350;
        this.animate();
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_COINS);
        }, 200);
    }

}