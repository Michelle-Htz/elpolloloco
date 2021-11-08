let canvas;
let world;
let keyboard = new Keyboard();


function init() {
    // canvas = document.getElementById('canvas');
    // world = new World(canvas, keyboard); //Die Variable Keyboard muss ebenfalls (wie das Canvas) an die Welt übergeben werden damit es existiert. 

}


function startGame() {
    document.getElementById('start-screen').classList.add('d-none');
    document.getElementById('start-game-btn').classList.add('d-none');
    canvas = document.getElementById('canvas');
    keyboard = new Keyboard();
    world = new World(canvas, keyboard);

}

function fullScreen() {
    canvas.requestFullscreen();
}





//Sobald die Tasten gedrückt werden werden sie aktiviert.
window.addEventListener("keydown", (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = true;
    }
    if (e.keyCode == 37) {
        keyboard.LEFT = true;
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = true;
    }
    if (e.keyCode == 39) {
        keyboard.RIGHT = true;
    }
    if (e.keyCode == 38) {
        keyboard.UP = true;
    }
    if (e.keyCode == 40) {
        keyboard.DOWN = true;
    }
    if (e.keyCode == 68) {
        keyboard.D = true;
    }
});

//Sobald die Tasten losgelassen werden, werden sie zurück auf false gesetzt. 
window.addEventListener("keyup", (e) => {
    if (e.keyCode == 39) {
        keyboard.RIGHT = false;
    }
    if (e.keyCode == 37) {
        keyboard.LEFT = false;
    }
    if (e.keyCode == 32) {
        keyboard.SPACE = false;
    }
    if (e.keyCode == 39) {
        keyboard.RIGHT = false;
    }
    if (e.keyCode == 38) {
        keyboard.UP = false;
    }
    if (e.keyCode == 40) {
        keyboard.DOWN = false;
    }
    if (e.keyCode == 68) {
        keyboard.D = false;
    }
});