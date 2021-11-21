type CardinalDirection = "North" | "East" | "South" | "West";

let direction: CardinalDirection;

direction = "North";

function move(distenceMeter: CardinalDirection) {
  console.log(`Moving ${distenceMeter} meters towards`); // ...
}
