const fail = (message: string) => {
  throw new Error(message);
};

let example: never;

// Erro Compile Time
// example = "2343";

// never type can be use to ensure all the cases are handled
