class BottleBar extends DrawableObject {
    BOTTLEBAR_IMAGES = [
        'img/7.Marcadores/Barra/Marcador_botella/Verde/0_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Verde/20_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Verde/40_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Verde/60_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Verde/80_.png',
        'img/7.Marcadores/Barra/Marcador_botella/Verde/100_.png'


    ];

    persentage = 0;

    constructor() {
        super();
        this.loadImages(this.BOTTLEBAR_IMAGES);
        this.x = 390;
        this.y = 5;
        this.width = 180;
        this.height = 40;
        this.setCollectedBottles(this.persentage);
    }

    setCollectedBottles(persentage) {
        this.persentage = persentage; // => 0 ... 5
        let path = this.BOTTLEBAR_IMAGES[this.resolveImageIndex(persentage)];
        this.img = this.imageCache[path];
    }

    resolveImageIndex(persentage) {
        if (this.persentage == 10) {
            return 5;
        } else if (this.persentage >= 8) {
            return 4;
        } else if (this.persentage >= 6) {
            return 3;
        } else if (this.persentage >= 4) {
            return 2;
        } else if (this.persentage >= 2) {
            return 1;
        } else {
            return 0;
        }
    }
}