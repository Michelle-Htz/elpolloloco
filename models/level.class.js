class Level {
    enemies;
    clouds;
    backgroundObjects;
    level_end_x = 2200;
    coins;
    bottel;

    //die Variablen werden dem Constructor mitgegeben.
    constructor(enemies, clouds, backgroundObjects, coins, bottels) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = backgroundObjects;
        this.coin = coins;
        this.bottel = bottels;
    }

}