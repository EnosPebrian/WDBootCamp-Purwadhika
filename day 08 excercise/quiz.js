s = [
  [5, 3, 4],
  [1, 5, 8],
  [6, 4, 2],
];

b = [
  [4, 9, 2],
  [3, 5, 7],
  [8, 1, 5],
];

c = [
  [4, 8, 2],
  [4, 5, 7],
  [6, 1, 6],
];

//check is five in center
//check is 1 with 9 and 3 with 7 in middle
//check is 1 6 8 in row / col
//check is 9 2 4 in row / col

// function formingMagicSquare(s) {
//   //pass
//   s[1][1] == 5 ? null : s[1][1] == 5;
//   //look for 1 or 9
//   s[0][1] == 1 ? (s[2][1] = 9) : s[0][0]==8? (s[0][2]=6) : s[0][2] == 8 ? s[0][0] == 6 : s[0][0] == 6 ? s[0][2] = 8 : s[0][2] == 6 ? s[0][0]=8 : null;
//   s[1][0] == 1 ? (s[1][2] = 9) : s[0][0]==8? (s[2][0]=6) : s[2][0] == 8 ? s[0][0] == 6 : s[0][0] == 6 ? s[2][0] = 8 : s[2][0] == 6 ? s[0][0]=8 : null;
//   s[1][2] == 1 ? (s[1][0] = 9) : s[0][2]==8? (s[2][2]=6) : s[2][2] == 8 ? s[0][2] == 6 : s[0][2] == 6 ? s[2][2] = 8 : s[2][2] == 6 ? s[0][2]=8 : null;
//   s[2][1] == 1 ? (s[0][1] = 9) : s[0][2]==8? (s[2][2]=6) : s[2][2] == 8 ? s[0][2] == 6 : s[0][2] == 6 ? s[2][2] = 8 : s[2][2] == 6 ? s[0][2]=8 : null;
//   s[0][1] == 9 ? (s[2][1] = 1) : s[0][0]==4? (s[0][2]=2) : s[0][2] == 4 ? s[0][0] == 2 : s[0][0] == 2 ? s[0][2] = 4 : s[0][2] == 2 ? s[0][0]=4 : null;
//   s[1][0] == 9 ? (s[1][2] = 1) : s[0][0]==4? (s[0][2]=2) : s[0][2] == 4 ? s[0][0] == 2 : s[0][0] == 2 ? s[0][2] = 4 : s[0][2] == 2 ? s[0][0]=4 : null;
//   s[1][2] == 9 ? (s[1][0] = 1) : s[0][0]==4? (s[0][2]=2) : s[0][2] == 4 ? s[0][0] == 2 : s[0][0] == 2 ? s[0][2] = 4 : s[0][2] == 2 ? s[0][0]=4 : null;
//   s[2][1] == 9 ? (s[0][1] = 1) : s[0][0]==4? (s[0][2]=2) : s[0][2] == 4 ? s[0][0] == 2 : s[0][0] == 2 ? s[0][2] = 4 : s[0][2] == 2 ? s[0][0]=4 : null;
//   //look for 3 and 7
//   s[0][1] == 3 ? (s[2][1] = 7) : null;
//   s[1][0] == 3 ? (s[1][2] = 7) : null;
//   s[1][2] == 3 ? (s[1][0] = 7) : null;
//   s[2][1] == 3 ? (s[0][1] = 7) : null;
//   s[0][1] == 7 ? (s[2][1] = 3) : null;
//   s[1][0] == 7 ? (s[1][2] = 3) : null;
//   s[1][2] == 7 ? (s[1][0] = 3) : null;
//   s[2][1] == 7 ? (s[0][1] = 3) : null;
//look for 1 6 8 line

function formingMagicSquare(s) {
  s_awal = [];
  for (arr of s) {
    s_temp = [];
    for (ar of arr) {
      s_temp.push(ar);
    }
    s_awal.push(s_temp);
  }

  //pass
  s[1][1] == 5 ? null : s[1][1] == 5;
  //look for 1 or 9
  s[0][1] == 1 ? (s[2][1] = 9) : null;
  s[1][0] == 1 ? (s[1][2] = 9) : null;
  s[1][2] == 1 ? (s[1][0] = 9) : null;
  s[2][1] == 1 ? (s[0][1] = 9) : null;
  s[0][1] == 9 ? (s[2][1] = 1) : null;
  s[1][0] == 9 ? (s[1][2] = 1) : null;
  s[1][2] == 9 ? (s[1][0] = 1) : null;
  s[2][1] == 9 ? (s[0][1] = 1) : null;
  //look for 3 and 7
  s[0][1] == 3 ? (s[2][1] = 7) : null;
  s[1][0] == 3 ? (s[1][2] = 7) : null;
  s[1][2] == 3 ? (s[1][0] = 7) : null;
  s[2][1] == 3 ? (s[0][1] = 7) : null;
  s[0][1] == 7 ? (s[2][1] = 3) : null;
  s[1][0] == 7 ? (s[1][2] = 3) : null;
  s[1][2] == 7 ? (s[1][0] = 3) : null;
  s[2][1] == 7 ? (s[0][1] = 3) : null;

  s[0][1] == 1 && s[0][0] == 8 ? (s[0][2] = 6) : null;
  s[0][1] == 1 && s[0][2] == 8 ? (s[0][0] = 6) : null;
  s[1][0] == 1 && s[0][0] == 8 ? (s[2][0] = 6) : null;
  s[1][0] == 1 && s[2][0] == 8 ? (s[0][0] = 6) : null;
  s[1][2] == 1 && s[0][2] == 8 ? (s[2][2] = 6) : null;
  s[1][2] == 1 && s[2][2] == 8 ? (s[0][2] = 6) : null;
  s[2][1] == 1 && s[2][2] == 8 ? (s[2][0] = 6) : null;
  s[2][1] == 1 && s[2][0] == 8 ? (s[2][2] = 6) : null;

  s[0][1] == 1 && s[0][0] == 6 ? (s[0][2] = 8) : null;
  s[0][1] == 1 && s[0][2] == 6 ? (s[0][0] = 8) : null;
  s[1][0] == 1 && s[0][0] == 6 ? (s[2][0] = 8) : null;
  s[1][0] == 1 && s[2][0] == 6 ? (s[0][0] = 8) : null;
  s[1][2] == 1 && s[0][2] == 6 ? (s[2][2] = 8) : null;
  s[1][2] == 1 && s[2][2] == 6 ? (s[0][2] = 8) : null;
  s[2][1] == 1 && s[2][2] == 6 ? (s[2][0] = 8) : null;
  s[2][1] == 1 && s[2][0] == 6 ? (s[2][2] = 8) : null;

  s[0][1] == 9 && s[0][0] == 4 ? (s[0][2] = 2) : null;
  s[0][1] == 9 && s[0][2] == 4 ? (s[0][0] = 2) : null;
  s[1][0] == 9 && s[0][0] == 4 ? (s[2][0] = 2) : null;
  s[1][0] == 9 && s[2][0] == 4 ? (s[0][0] = 2) : null;
  s[1][2] == 9 && s[0][2] == 4 ? (s[2][2] = 2) : null;
  s[1][2] == 9 && s[2][2] == 4 ? (s[0][2] = 2) : null;
  s[2][1] == 9 && s[2][2] == 4 ? (s[2][0] = 2) : null;
  s[2][1] == 9 && s[2][0] == 4 ? (s[2][2] = 2) : null;

  s[0][1] == 9 && s[0][0] == 2 ? (s[0][2] = 4) : null;
  s[0][1] == 9 && s[0][2] == 2 ? (s[0][0] = 4) : null;
  s[1][0] == 9 && s[0][0] == 2 ? (s[2][0] = 4) : null;
  s[1][0] == 9 && s[2][0] == 2 ? (s[0][0] = 4) : null;
  s[1][2] == 9 && s[0][2] == 2 ? (s[2][2] = 4) : null;
  s[1][2] == 9 && s[2][2] == 2 ? (s[0][2] = 4) : null;
  s[2][1] == 9 && s[2][2] == 2 ? (s[2][0] = 4) : null;
  s[2][1] == 9 && s[2][0] == 2 ? (s[2][2] = 4) : null;

  function calculate_cost(numb1, numb2) {
    return Math.abs(numb1 - numb2);
  }

  let cost = 0;
  for (row in s) {
    // console.log("here", cost);
    for (col in s) {
      //   console.log("there", Math.abs(s_awal[row][col] - s[row][col]));
      cost = cost + Math.abs(s_awal[row][col] - s[row][col]);
    }
  }
  return cost;
}

formingMagicSquare(s);
console.log(formingMagicSquare(s));
