//
// function star(symbol) {
//   for (var i = 1; i <= 1; i++) {
//       console.log(symbol);
//     }
// }
//
// star('****** ');
// star('*    *');
// star('*    *');
// star('*    *');
// star('****** ');

function printBox(width, height) {

  var rowOfStars = "*".repeat(width);
  console.log(rowOfStars);

  var middleRow = "*" + " ".repeat(width-2) + "*\n";
  var allTheMiddle = middleRow.repeat(height - 2);
  console.log(allTheMiddle);

  console.log(rowOfStars);
}

printBox(10,6);
