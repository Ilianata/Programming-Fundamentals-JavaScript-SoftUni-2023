function reverseString(input) {
  let splitStr = input.split("");
  let reverseSTr = splitStr.reverse();
  let joinStr = reverseSTr.join("");

  console.log(joinStr);
}
reverseString("Hello");
