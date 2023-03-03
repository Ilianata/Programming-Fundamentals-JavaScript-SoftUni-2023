function distance(x1, y1, x2, y2) {
  let ab = Math.abs(x2 - x1);
  let bc = Math.abs(y1 - y2);
  // Използвам формулата за намиране на хипотенуза на правоъгълен триъгълник...
  let dist = Math.pow(ab, 2) + Math.pow(bc, 2);
  let final = Math.sqrt(dist);
  console.log(final);
}
distance(2.34, 15.66, -13.55, -2.9985);
