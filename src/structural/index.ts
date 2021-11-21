// typescript ignore name of type of variable only value of type is checked
type User = { id: string };
type Product = { id: string };

let user: User = { id: "1" };
let product: Product = { id: "1" };

// have same type compatibility
user = product; // OK
product = user; // OK

type Point2D = { x: number; y: number };
type Point3D = { x: number; y: number; z: number };

let Point2D: Point2D = { x: 1, y: 2 };
let Point3D: Point3D = { x: 1, y: 2, z: 3 };

// Extra info ok
Point2D = Point3D; // OK
function takesPoint3D(p: Point3D) {}
takesPoint3D(Point2D); // Error

function takesPoint2D(p: Point2D) {}
takesPoint2D(Point3D); // OK
