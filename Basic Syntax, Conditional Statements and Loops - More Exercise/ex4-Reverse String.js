function reverseString(input) {
  // За да обърнем стринг използваме три последователни метода....
  let splitStr = input.split("");
  let reverseSTr = splitStr.reverse();
  let joinStr = reverseSTr.join("");

  console.log(joinStr);
}
reverseString("Hello");
