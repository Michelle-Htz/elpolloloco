class CoinBar extends DrawableObject {
    COINBAR_IMAGES = [
        'img/7.Marcadores/Barra/Marcador moneda/azul/0_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/20_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/40_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/60_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/80_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/100_.png'

    ];

    coinAmount = 0;

    constructor() {
        super();
        this.loadImages(this.COINBAR_IMAGES);
        this.x = 200;
        this.y = 5;
        this.width = 180;
        this.height = 40;
        this.setCollectedCoins(this.coinAmount);
    }

    setCollectedCoins(coinAmount) {
        this.coinAmount = coinAmount; // => 0 ... 5
        let path = this.COINBAR_IMAGES[this.resolveImageIndex(coinAmount)];
        this.img = this.imageCache[path];
    }

    resolveImageIndex(coinAmount) {
        if (this.coinAmount == 10) {
            return 5;
        } else if (this.coinAmount >= 8) {
            return 4;
        } else if (this.coinAmount >= 6) {
            return 3;
        } else if (this.coinAmount >= 4) {
            return 2;
        } else if (this.coinAmount >= 2) {
            return 1;
        } else {
            return 0;
        }
    }
}