type Padding = number | string;

/**
 * Takes a string and adds padding to the left.
 * if 'padding' is a number, then that number of spaces is added to the left
 * if 'padding' is a stirng, then padding is appended to left
 */

function padLeft(value: string, padding: Padding) {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  } else {
    return padding + value;
  }
}

padLeft("Hello world", 4); // returns "    Hello world"
padLeft("Hello world", "   "); // returns "   Hello world"
padLeft("Hello world", "----"); // return "--Hello world"
