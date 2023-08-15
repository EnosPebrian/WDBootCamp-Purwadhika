function isMagicSquare(matrix) {
  var sum = matrix[0][0] + matrix[0][1] + matrix[0][2]; // Calculate the sum of the first row

  // Check if the sum of each row, column, and diagonal is equal to the magic constant
  for (var i = 1; i < 3; i++) {
    var rowSum = matrix[i][0] + matrix[i][1] + matrix[i][2];
    var colSum = matrix[0][i] + matrix[1][i] + matrix[2][i];
    if (rowSum !== sum || colSum !== sum) {
      return false;
    }
  }

  var diagonalSum1 = matrix[0][0] + matrix[1][1] + matrix[2][2];
  var diagonalSum2 = matrix[0][2] + matrix[1][1] + matrix[2][0];
  if (diagonalSum1 !== sum || diagonalSum2 !== sum) {
    return false;
  }

  return true;
}

function costcounter(number1, number2) {
  return Math.abs(number1 - number2);
}

function comparator(matrix) {
  var magicSquares = [
    [
      [8, 1, 6],
      [3, 5, 7],
      [4, 9, 2],
    ],
    [
      [6, 1, 8],
      [7, 5, 3],
      [2, 9, 4],
    ],
    [
      [4, 9, 2],
      [3, 5, 7],
      [8, 1, 6],
    ],
    [
      [2, 9, 4],
      [7, 5, 3],
      [6, 1, 8],
    ],
    [
      [8, 3, 4],
      [1, 5, 9],
      [6, 7, 2],
    ],
    [
      [4, 3, 8],
      [9, 5, 1],
      [2, 7, 6],
    ],
    [
      [6, 7, 2],
      [1, 5, 9],
      [8, 3, 4],
    ],
    [
      [2, 7, 6],
      [9, 5, 1],
      [4, 3, 8],
    ],
  ];

  let minCost = Infinity;

  // Iterate through all the magic squares and calculate the cost
  for (let i = 0; i < magicSquares.length; i++) {
    let cost = 0;

    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        cost += costcounter(matrix[row][col], magicSquares[i][row][col]);
      }
    }

    if (cost < minCost) {
      minCost = cost;
    }
  }

  return minCost;
}

s = [
  [5, 3, 4],
  [1, 5, 8],
  [6, 4, 2],
];

console.log(comparator(s));
a = [
  [4, 9, 2],
  [3, 5, 7],
  [8, 1, 5],
];

console.log(comparator(a));

c = [
  [4, 8, 2],
  [4, 5, 7],
  [6, 1, 6],
];

console.log(comparator(c));
