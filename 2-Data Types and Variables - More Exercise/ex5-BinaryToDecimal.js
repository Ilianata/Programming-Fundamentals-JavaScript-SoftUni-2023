function toDecimal(binari) {
  let desimal = 0;
  if (binari < 1000) {
    let bin = binari.toString();
    for (let i = 0; i < bin.length; i++) {
      desimal += Number(bin[i]);
    }
  } else {
    let bin = binari.toString();
    desimal = parseInt(bin, 2);
  }
  console.log(desimal);
}
toDecimal(00001001);
toDecimal(11110000);
