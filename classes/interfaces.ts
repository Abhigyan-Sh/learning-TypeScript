interface InfraRedShooter {
  frequency : number;
  span : number;
  code : string;
}

interface FlashLight {
  brightness : number;
  createMorseCode(): string
}

/* a class extends a class and implements an interface */
class MiRemote implements InfraRedShooter, FlashLight {
  /* this format also generates the same code
    1) didn't needed to place anything here.. (in this comments place)
    2) won't need to place anything inside code execution block of constructor */
  constructor(
    public frequency : number, 
    public span : number, 
    public code : string,

    // add for FlashLight
    public brightness : number, 
  ) {}
  
  // add for FlashLight
  createMorseCode(): string {
    console.log('this is morse code')
    return ''
  }
}