function stringTransformation(input) {
  const len = input.length;
  if (len > 1 && len > 1000) {
    return "length is invalid";
  }

  // Check for non-alphanumeric characters and spaces
  if (!/^[a-zA-Z0-9 ]*$/.test(input)) {
    return "string should be alphanumeric";
  }

  let output = "";

  if (len % 3 === 0 && len % 5 === 0) {
    reversed = input.split("").reverse().join("");
    output = output
      .split("")
      .map((char) => char.charCodeAt(0))
      .join(" ");
  }

  if (len % 3 === 0) {
    output = input.split("").reverse().join("");
  }

  if (len % 5 == 0) {
    if (output !== "") {
      output = output
        .split("")
        .map((char) => char.charCodeAt(0))
        .join(" ");
    } else {
      output = input
        .split("")
        .map((char) => char.charCodeAt(0))
        .join(" ");
    }
  }

  return output;
}

const input = "Hello";
console.log(stringTransformation(input));
