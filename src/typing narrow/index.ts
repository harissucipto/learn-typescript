/*
 Disni kita akan membahas type checking pada javascript.
 kita tidak bisa menggunakan type operator unutk membangingkan type object
 menggunakan type object dapat menggunakan instaceof operator
*/

function padLeft(value: string, padding: string | number) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }

  if (typeof padding === "string") {
    return padding + value;
  }

  throw new Error(`Expected string or number, got '${padding}'.`);
}

// Type checking with instanceof
class Cat {
  meow() {
    console.log("meow");
  }
}

class Dog {
  bark() {
    console.log("woof");
  }
}

type Binatang = Cat | Dog;

function speak(animal: Binatang) {
  if (animal instanceof Cat) {
    animal.meow();
  }
  if (animal instanceof Dog) {
    animal.bark();
  }
}

// tapi untuk object karena instance tidak dibuat dengan class maka kita tidak bisa menggunakan instanceof
type Sequare = {
  size: number;
};

type Rectangle = {
  height: number;
  width: number;
};

type Shape = Sequare | Rectangle;

function area(shape: Shape) {
  // chek apakah properti ada di object
  if ("size" in shape) {
    return shape.size * shape.size;
  }
  if ("width" in shape) {
    return shape.height * shape.width;
  }
}
