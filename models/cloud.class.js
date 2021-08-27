class Cloud extends MovableObject {

    y = 20;
    height = 250;
    width = 500;

    constructor() {
        //super() benutzt man, wenn man Methoden des übergeordnete Objekt aufruft
        super().loadImage('img/5.Fondo/Capas/4.nubes/1.png');
        this.x = Math.random() * 500; //math.random() generiert eine zufällige Zahl zwischen 200-700
    }
}