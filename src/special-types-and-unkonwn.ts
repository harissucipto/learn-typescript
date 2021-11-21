let exampleAny: any;
let exampleUnknown: unknown;

// any
exampleAny = 1;
exampleAny = "string";

// unknown
exampleUnknown = 1;
exampleUnknown = "string";

// nay using to bypass types
// unknow not like types its allow to assign any type but with safe manner

//  exampleUnknown.trim(""); // Error mus be checked string first
if (exampleUnknown === "string") {
  exampleUnknown.trim();
}
