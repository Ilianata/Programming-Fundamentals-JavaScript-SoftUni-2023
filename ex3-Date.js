function daet(year, month, day) {
  if (year === 1) {
    year = 1901;
  }
  day++;
  if (day === 31) {
    month++;
    day = 1;
  }
  console.log(`${year}-${month}-${day}`);
}
daet(1, 1, 1);
