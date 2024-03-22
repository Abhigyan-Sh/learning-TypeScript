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
abstract class InfraRedShooter2 {
  constructor(
    // using the shorthand
    public frequency : number, 
    public span : number, 
    public code : string, 
  ) {}

  /* getHelp() is a 
    - compulsory method and 
    - can be overwritten according to specific sections of code */
  abstract getHelp() : void

  /* now this is something we couldn't do with interfaces !, 
  we won't be using the 'abstract' keyword */
  getSaviour() : void { 
    console.log('we need help out here !')
  }
}

class MiRemote2 extends InfraRedShooter2 {
  constructor(
    public frequency : number, 
    public span : number, 
    public code : string, 
    public sound : string, 
  ) {
    super(frequency, span, code)
  }

  getHelp () : void { // overwritten 
    console.log('we are stuck !')
  }
}

const miRemote2 = new MiRemote2(
  3200, 3, 'need some help', ''
)

miRemote2.getSaviour()