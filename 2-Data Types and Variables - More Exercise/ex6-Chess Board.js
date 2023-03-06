function chessBoard(number) {
  let isBlack = true;
  console.log('<div class="chessboard">');
  for (let i = 1; i <= number; i++) {
    console.log("  <div>");
    if (number % 2 === 0) {
      if (i % 2 === 0) {
        isBlack = false;
      } else {
        isBlack = true;
      }
    }
    for (let j = 1; j <= number; j++) {
      if (isBlack) {
        console.log(`    <span class="black"></span>`);
        isBlack = false;
      } else {
        console.log(`    <span class="white"></span>`);
        isBlack = true;
      }
    }
    console.log("  </div>");
  }
  console.log("</div>");
}
chessBoard(3);
//chessBoard(6);
