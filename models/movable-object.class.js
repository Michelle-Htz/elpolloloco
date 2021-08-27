class MovableObject {
    x = 50;
    y = 220;
    height = 180;
    width = 80;
    img;

    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }

    moveRight() {
        console.log('Moving right');

    }


    moveLeft() {

    }
}