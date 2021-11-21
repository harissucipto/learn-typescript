class Person {
  private _age: number;
  constructor(_age: number) {
    this._age = _age;
  }

  // pont acces this outside of the function
  growOld = () => {
    this._age++;
  };

  age() {
    return this._age;
  }
}

const person = new Person(0);
person.growOld();
console.log("age:", person.age());

// lexical this  (in this bottom the code not working because of lexical this object not bounded)
const growOld = person.growOld;
growOld(); // _age of undefined
