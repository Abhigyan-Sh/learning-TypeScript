"use strict";
/* what are abstract classes ?
  - we can't make objects for abstract classes.
  - and so rather we use them as blueprints like interfaces
  to be used by another class which extends these as their
  parent class.
  - these abstract classes are created by just adding the
  'abstract' keyword to a class.

why abstract classes when we already had interfaces ?
  - we can make them have some characteristic by default like getSaviour()
  which is definitely much more than mere a blueprint */
class InfraRedShooter2 {
    constructor(
    // using the shorthand
    frequency, span, code) {
        this.frequency = frequency;
        this.span = span;
        this.code = code;
    }
    /* now this is something we couldn't do with interfaces !,
    we won't be using the 'abstract' keyword */
    getSaviour() {
        console.log('we need help out here !');
    }
}
class MiRemote2 extends InfraRedShooter2 {
    constructor(frequency, span, code, sound) {
        super(frequency, span, code);
        this.frequency = frequency;
        this.span = span;
        this.code = code;
        this.sound = sound;
    }
    getHelp() {
        console.log('we are stuck !');
    }
}
const miRemote2 = new MiRemote2(3200, 3, 'need some help', '');
miRemote2.getSaviour();
