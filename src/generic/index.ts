/** A FIFO (First in First Oout) collection */
class Antrian<T> {
  data: Array<T> = [];

  push(item: T) {
    this.data.push(item);
  }

  pop(): T | undefined {
    return this.data.shift();
  }
}

const myAntrian: Antrian<number> = new Antrian();
myAntrian.push(1);
myAntrian.push("3243");
