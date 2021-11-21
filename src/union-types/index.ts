/**
 * @param input a command or an array of commands
 * @returns a single trimmed string
 */
function formatCommandLine(input: string | string[]) {
  let line = "";
  if (typeof input === "string") {
    line = input.trim();
  } else {
    line = input.map((x: string) => x.trim()).join(" ");
  }
  return line;
}

formatCommandLine("hello world");
