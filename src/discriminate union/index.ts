type Circle = {
  kind: "circle";
  radius: number;
};

type Square = {
  kind: "square";
  size: number;
};

type Rectangle2 = {
  kind: "rectangle";
  width: number;
  height: number;
};

type Shape2 = Circle | Square | Rectangle2;

function area(shape: Shape2) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  } else if (shape.kind === "square") {
    return shape.size ** 2;
  }
  if (shape.kind === "rectangle") {
    return shape.width * shape.height;
  }
}
