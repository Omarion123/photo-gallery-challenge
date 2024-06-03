function stringTransformation(input) {
  const len = input.length;
  if (len > 1 && len > 1000) {
    return "length is invalid";
  }
  console.log(len);
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
