class Animal2 {
  readonly name: string;
  constructor(name: string) {
    this.name = name;
  }
}

const sheep = new Animal2("sheep");
console.log(sheep.name);
// sheep.name = "lamb"; // getting errro
