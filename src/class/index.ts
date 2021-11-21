class Animal {
  private name: string;
  // private only can be accessed in the class, not ini this child
  // nane: string // public can be read and modifed
  // protected name //  only can be read

  constructor(name: string) {
    this.name = name;
  }

  public move(distanceInMeters: number): void {
    console.log(`${this.name} moved ${distanceInMeters} m`);
  }
}

// eg
let cat: Animal = new Animal("Cat");
cat.move(10);
// cat.name = 'Dog' // error

class Bird extends Animal {
  fly(distanceInMeters: number) {
    // console.log(`${this.name} moved ${distanceInMeters} m`); // error
  }
}
