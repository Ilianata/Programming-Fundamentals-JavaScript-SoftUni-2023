function sort2(first, second, third) {
  if (first > second && first > third) {
    console.log(first);
  } else if (second > first && second > third) {
    console.log(second);
  } else if (third > first && third > second) {
    console.log(third);
  }
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
  }
  if (first <= second && first <= third) {
    console.log(first);
  } else if (second <= first && second <= third) {
    console.log(second);
  } else if (third <= first && third <= second) {
    console.log(third);
  }
}
