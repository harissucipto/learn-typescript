// Exprase Base
export interface Request {
  body: any;
} // interface merging\index.ts

//  Express JSON
export interface Request {
  json: any;
}

// Our App
function handleRequest(req: Request) {
  // ...
  req.body;
  req.json;
}
