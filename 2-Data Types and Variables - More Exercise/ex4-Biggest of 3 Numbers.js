function biggestOf3Numbers(first, second, third) {
  if (first > second && first > third) {
    console.log(first);
  } else if (second > first && second > third) {
    console.log(second);
  } else console.log(third);
}
biggestOf3Numbers(130, 5, 99);
