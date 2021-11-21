class ThrowableObject extends MovableObject {
    THROWABLEOBJECT_IMAGE = ['img/6.botella/1.Marcador.png']




    constructor(x, y) {

        super().loadImage(this.THROWABLEOBJECT_IMAGE);
        this.x = x;
        this.y = y;
        this.height = 60;
        this.width = 50;
        this.throw();
    }

    throw () {
        this.speedY = 10;
        this.applyGravity();
        setInterval(() => {
            this.x += 10;
        }, 25);

    }

}