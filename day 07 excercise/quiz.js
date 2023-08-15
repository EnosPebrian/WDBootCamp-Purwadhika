function diagonalDifference(arr) {
  // Write your code here
  let total1 = 0;
  let total2 = 0;
  for (let i in arr) {
    for (let j in arr) {
      i == j ? (total1 += arr[i][j]) : null;
      j == arr.length - 1 - i ? (total2 += arr[i][j]) : null;
      console.log(total1, total2);
    }
  }
  return Math.abs(total1 - total2);
}

arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

console.log(diagonalDifference(arr));
console.log("-------------\n\n");

function staircase(n) {
  // Write your code here
  for (i = 0; i < n; i++) {
    let str = "";
    for (j = n - 1; j >= 0; j--) {
      if (j <= i) {
        str += "#";
        continue;
      }
      str += " ";
    }
    console.log(str);
  }
}

staircase(6);

console.log("-------------\n\n");

function formingMagicSquare(s) {
  const magicnumber = 15;
  // Write your code here
  const awal = s;
  let temp_s = [...s];
  let arr_cost = [];
  let diagKiriatas = [];
  let diagKananatas = [];
  let rowke1 = [];
  let rowke2 = [];
  let rowke3 = [];
  let colke1 = [];
  let colke2 = [];
  let colke3 = [];
  //check the sum of each row == 15
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
        diagKiriatas.push([i, j]);
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

  // add or minus number in intersection
  function modify_array(arraymatrix, objchecker) {
    temp_array = Object.entries(objchecker);

    for (i = 0; i < temp_array.length; i++) {
      temp_array = temp_array
        .filter(
          ([key, value]) =>
            value < 15 &&
            key != "DiagonalKananAtas" &&
            key != "DiagonalKiriAtas"
        )
        .sort((a, b) => a[1] - b[1]);
      console.log(temp_array);
      if (temp_array.length == 1) console.log(objchecker);

      // if (
      //   temp_array[i][0] == "DiagonalKananAtas" ||
      //   temp_array[i + 1][0] == "DiagonalKananAtas" ||
      //   temp_array[i][0] == "DiagonalKiriAtas" ||
      //   temp_array[i + 1][0] == "DiagonalKiriAtas"
      // ) {
      //   console.log(arraymatrix);
      //   for (let i = 0; i < arraymatrix.length; i++) {
      //     for (let j = 0; j < arraymatrix.length; j++) {
      //       arraymatrix[i][j] += 1;
      //       if (
      //         checker(arraymatrix).DiagonalKiriAtas > 15 ||
      //         checker(arraymatrix).DiagonalKananAtas > 15
      //       ) {
      //         arraymatrix[i][j] += 1;
      //         console.log(i, j);
      //         continue;
      //       }
      //     }
      //   }
      if (temp_array[i][1] < 15 && temp_array[i + 1][1] < 15) {
        //extract row and col intersection
        let row1;
        let col1;
        if (temp_array[i][0].slice(0, 3) == "ROW") {
          row1 = temp_array[i][0].slice(-2, -1);
          if (temp_array[i + 1][0].slice(0, 3) == "ROW") {
            if (temp_array[i + 2][0].slice(0, 3) == "ROW") {
              col1 = temp_array[i + 3][0].slice(-2, -1);
            } else {
              col1 = temp_array[i + 2][0].slice(-2, -1);
            }
          } else {
            col1 = temp_array[i + 1][0].slice(-2, -1);
          }
        } else if (temp_array[i][0].slice(0, 3) == "COL") {
          col1 = temp_array[i][0].slice(-2, -1);
          if (temp_array[i + 1][0].slice(0, 3) == "COL") {
            if (temp_array[i + 2][0].slice(0, 3) == "COL") {
              row1 = temp_array[i + 3][0].slice(-2, -1);
            } else {
              row1 = temp_array[i + 2][0].slice(-2, -1);
            }
          } else {
            row1 = temp_array[i + 2][0].slice(-2, -1);
          }
        }
        arraymatrix[row1][col1] += 1;
        //   if (
        //     checker(arraymatrix).DiagonalKiriAtas > 15 ||
        //     checker(arraymatrix).DiagonalKananAtas > 15
        //   ) {
        //     arraymatrix[row1][col1] += 1;
        //     continue;

        console.log(arraymatrix);
        break;
      }
    }
  }

  //   function modify_array(matrix, objchecker = {}) {
  //     temp_array = Object.entries(objchecker).filter(
  //       ([key, value]) => key != `DiagonalKananAtas` && key != `DiagonalKiriAtas`
  //     );
  //     temp_array.sort((a, b) => a[1] - b[1]);
  //     console.log(temp_array);
  //     let row;
  //     let col;
  //     if (temp_array[0][0].slice(0, 3) == "ROW")
  //       row = temp_array[0][0].slice(-2, -1);
  //     if (temp_array[0][0].slice(0, 3) == "COL")
  //       col = temp_array[0][0].slice(-2, -1);
  //     if (temp_array[1][0].slice(0, 3) == "ROW")
  //       row = temp_array[0][0].slice(-2, -1);
  //     if (temp_array[1][0].slice(0, 3) == "COL")
  //       col = temp_array[0][0].slice(-2, -1);
  //     matrix[row][col] += 1;
  //     console.log(matrix);
  //   }

  function modify_overdoze(arraymatrix, objchecker) {
    temp_array = Object.entries(objchecker);
    temp_array.filter(([key, value]) => value > 15);
  }

  while (true) {
    modify_array(temp_s, checker(temp_s));
    if (!Object.values(checker(temp_s)).filter((val) => val < 15).length) {
      console.log(temp_s);
      break;
    }
  }
  //   if (!Object.values(checker(temp_s)).filter((val) => val > 15).length) {
  //     for (i in arraymatrix) {
  //       for (j in arraymatrix) {
  //       }
  //     }
  //   }
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
