function add(a: number, b: number): number {
  return a + b;
}

function log(message: string): void {
  console.log(message);
}

// spread operator args types using arrays
function sum(...values: number[]): number {
  return values.reduce((a, b) => a + b, 0);
}

// function as first class can bie assign to type

type Add = (a: number, b: number) => number;
let addV2: Add;

addV2 = (a, b) => a + b;
