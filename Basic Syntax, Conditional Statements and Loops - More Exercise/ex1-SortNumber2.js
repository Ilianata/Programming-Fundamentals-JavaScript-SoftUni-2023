function sort2(first, second, third) {
  // Намираме коя е най-голямата цифра и я принтираме първа.....
  if (first > second && first > third) {
    console.log(first);
  } else if (second > first && second > third) {
    console.log(second);
  } else if (third > first && third > second) {
    console.log(third);
  }
  // .....След това втората....
  if (
    (first >= second && first <= third) ||
    (first <= second && first >= third)
  ) {
    console.log(first);
  } else if (
    (second >= first && second <= third) ||
    (second <= first && second >= third)
  ) {
    console.log(second);
  } else if (
    (third >= first && third <= second) ||
    (third <= first && third >= second)
  ) {
    console.log(third);
  } // Последващата проверка показва най-малкото число от трите
  if (first <= second && first <= third) {
    console.log(first);
  } else if (second <= first && second <= third) {
    console.log(second);
  } else if (third <= first && third <= second) {
    console.log(third);
  }
}
