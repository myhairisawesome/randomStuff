import keyMap from './keymap.js';

// Check for custom events later on

function movePlayer(event) {
    if(event.keyCode == keyMap.w) {
        return {x:0,y:-10};
    }
    if(event.keyCode == keyMap.a) {
        return {x:-10,y:0};
    }
    if(event.keyCode == keyMap.s) {
        return {x:0,y:10};
    }
    if(event.keyCode == keyMap.d) {
        return {x:10,y:0};
    }
}

export {movePlayer}