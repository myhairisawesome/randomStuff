export default class FSM {

    constructor() {
        this.activeState;
    }

    setState(state) {
        this.activeState = state;
    }
    
    update() {
        if(activeState != undefined) {
            activeState();
        }
    }
}