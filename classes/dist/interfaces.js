"use strict";
/* a class extends a class and implements an interface */
class MiRemote {
    /* this format also generates the same code
      1) didn't needed to place anything here.. (in this comments place)
      2) won't need to place anything inside code execution block of constructor */
    constructor(frequency, span, code, 
    // add for FlashLight
    brightness) {
        this.frequency = frequency;
        this.span = span;
        this.code = code;
        this.brightness = brightness;
    }
    // add for FlashLight
    createMorseCode() {
        console.log('this is morse code');
        return '';
    }
}
