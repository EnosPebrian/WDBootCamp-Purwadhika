function formingMagicSquare(s) {
  // Write your code here
  let temp_s = [...s];
  function checker(matrix) {
    let sum = {};
    let koordinat = {};
    let totaldiag1 = 0;
    let totaldiag2 = 0;
    for (i = 0; i < matrix.length; i++) {
      let totalrow = 0;
      let totalcol = 0;
      for (j = 0; j < matrix.length; j++) {
        totalrow += matrix[i][j];
        if (j == i) {
          totaldiag1 += matrix[i][j];
        }
        if (matrix.length - 1 - i == i) totaldiag2 += matrix[i][j];
        totalcol += matrix[j][i];
      }
      sum[`ROW(${i})`] = totalrow;
      sum[`COL(${i})`] = totalcol;
      totalcol = 0;
    }
    sum[`DiagonalKiriAtas`] = totaldiag1;
    sum[`DiagonalKananAtas`] = totaldiag2;
    return sum;
  }

  function modify_array(arraymatrix, objchecker) {
    temp_array = Object.entries(objchecker);

    for (i = 0; i < temp_array.length; i++) {
      temp_array = temp_array.filter(([key, value]) => value < 15);
      console.log(temp_array);
      //   if (
      //     temp_array[i][0] == "DiagonalKananAtas" ||
      //     temp_array[i + 1][0] == "DiagonalKananAtas" ||
      //     temp_array[i][0] == "DiagonalKiriAtas" ||
      //     temp_array[i + 1][0] == "DiagonalKiriAtas"
      //   ) {
      //     return undefined;
      //   }
      if (temp_array[i][1] < 15 && temp_array[i + 1][1] < 15) {
        let row1;
        let col1;
        if (temp_array[i][0].slice(0, 3) == "ROW") {
          row1 = temp_array[i][0].slice(-2, -1);
        }
        if (temp_array[i][0].slice(0, 3) == "COL") {
          col1 = temp_array[i][0].slice(-2, -1);
        }
        if (temp_array[i + 1][0].slice(0, 3) == "ROW") {
          row1 = temp_array[i][0].slice(-2, -1);
        }
        if (temp_array[i + 1][0].slice(0, 3) == "COL") {
          col1 = temp_array[i][0].slice(-2, -1);
        }
        arraymatrix[row1][col1] += 1;
        console.log(arraymatrix);
        break;
      }
    }
  }
  while (true) {
    modify_array(temp_s, checker(temp_s));
    if (!Object.values(checker(temp_s)).filter((val) => val < 15).length) {
      console.log(temp_s);
      break;
    }
  }
}

s = [
  [5, 3, 4],
  [1, 5, 8],
  [6, 4, 2],
];

formingMagicSquare(s);
a = [
  [4, 9, 2],
  [3, 5, 7],
  [8, 1, 5],
];

formingMagicSquare(a);

c = [
  [4, 8, 2],
  [4, 5, 7],
  [6, 1, 6],
];

formingMagicSquare(c);
