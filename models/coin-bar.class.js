class CoinBar extends DrawableObject {
    COIN_IMAGES = [
        'img/7.Marcadores/Barra/Marcador moneda/azul/0_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/20_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/40_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/60_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/80_.png',
        'img/7.Marcadores/Barra/Marcador moneda/azul/100_.png'

    ];



    constructor() {
        super();
        this.loadImages(this.COIN_IMAGES);
        this.x = 10;
        this.y = 20;
        this.width = 200;
        this.height = 50;
    }
}