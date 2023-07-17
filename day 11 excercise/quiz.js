function equalStacks(h1, h2, h3) {
  // Write your code here
  //   function acc(val, curr) {
  //     return val + curr;
  //   }
  //   let map = new Map();
  //   map.set(h1.reduce(acc, 0), h1);
  //   map.set(h2.reduce(acc, 0), h2);
  //   map.set(h3.reduce(acc, 0), h3);
  //   function map_setter(amap) {
  //     let max = [...map.keys()].sort()[[...map.keys()].length - 1];
  //     a = map.get(max);
  //     map.delete(max);
  //     a.shift();
  //     map.set(a.reduce(acc, 0), a);
  //   }
  //   while (true) {
  //     if (map.size == 1) {
  //       return [...map.keys()][0];
  //     }
  //     map_setter(map);
  //   }
}

// function equalStacks(h1, h2, h3) {
//   // Write your code here
//   function acc(val, curr) {
//     return val + curr;
//   }
//   let a = [h1, h2, h3];
//   while (
//     h1.reduce(acc, 0) != h2.reduce(acc, 0) &&
//     h1.reduce(acc, 0) != h3.reduce(acc, 0)
//   ) {
//     let index = a.map((val, i) => [i, val.reduce(acc, 0)]);
//     index = index.sort((val1, val2) => val1[1] - val2[1])[a.length - 1][0];
//     a[index].shift();
//   }
//   return h2.reduce(acc, 0);
// }
function equalStacks(h1, h2, h3) {
  // Write your code here
  function acc(val, curr) {
    return val + curr;
  }
  let map = new Map();
  map.set(h1, h1.reduce(acc, 0));
  map.set(h2, h2.reduce(acc, 0));
  map.set(h3, h3.reduce(acc, 0));
  let max;
  while (true) {
    if (
      map.get(h1) == map.get(h2) &&
      map.get(h2) == map.get(h3) &&
      map.get(h1) == map.get(h3)
    ) {
      return map.get(h1);
    }
    if (map.get(h1) > map.get(h2)) {
      if (map.get(h1) > map.get(h3)) {
        max = h1;
      } else max = h3;
    } else {
      if (map.get(h2) > map.get(h3)) {
        max = h2;
      } else max = h3;
    }
    max.shift();
    map.set(max, max.reduce(acc, 0));
    max = 0;
  }
}

h1 = [3, 2, 1, 1, 1];
h2 = [4, 3, 2];
h3 = [1, 1, 4, 1];
h4 = [1, 2, 1, 1];
h5 = [1, 1, 2];
h6 = [1, 1];
console.log(equalStacks(h1, h2, h3));

console.log(equalStacks(h4, h5, h6));

console.log(`\n\n-----------------\n\n`);
// function waiter(number, q) {
//   // Write your code here
//   let prime = [2, 3, 5, 7, 11, 13];
//   let answers = [];
//   let B = [];
//   let temp = [];
//   for (let i = 0; i < q; i++) {
//     B = number.filter((val) => !(val % prime[i]));
//     if (i > 1) {
//       temp = B;
//       B = [];
//       for (item of temp) {
//         B.unshift(item);
//       }
//     }
//     if (i == 0 && q == 1) {
//       number = number.filter((val) => val % prime[i]);
//     } else {
//       temp = number.filter((val) => val % prime[i]);
//       number = [];
//       for (let item of temp) {
//         number.unshift(item);
//       }
//     }

//     answers.push(...B);
//   }

//   answers.push(...number);
//   return answers;
// }

function waiter(number, q) {
  // Write your code here
  let prime = [2, 3, 5, 7, 11, 13];
  function is_prime(number) {
    if (number <= 1) return false;
    else if (number == 2) return true;
    else if (number > 2) {
      for (let i = 3; i <= number / 2; i++) {
        if (number % (i / 2) == 0) {
          return false;
        }
      }
      return true;
    }
  }
  let temp_numb = prime[prime.length - 1];
  while (prime.length < q) {
    temp_numb == prime[prime.length - 1] ? (temp_numb += 2) : null;
    is_prime(temp_numb) ? prime.push(temp_numb) : null;
    temp_numb += 2;
  }

  let answers = [];
  let B = [];
  let A = [];
  for (let i = 0; i < q; i++) {
    let temp_a = 0;
    B = [];
    A = [];

    while (number.length > 0) {
      temp_a = number.pop();
      temp_a % prime[i] ? A.push(temp_a) : B.push(temp_a);
    }
    number = A;
    while (B.length > 0) {
      temp_b = B.pop();
      answers.push(temp_b);
    }
  }

  while (number.length > 0) {
    let temp_c = number.pop();
    answers.push(temp_c);
  }
  return answers;
}

list = [3, 4, 7, 6, 5];
q = 1;

console.log(waiter(list, q));

A = [2, 3, 4, 5, 6, 7];
q = 3;
console.log(waiter(A, q));

A = [3, 3, 4, 4, 9];
q = 10;
console.log(waiter(A, q));

console.log(`\n\n-------------------------------`);

function componentsInGraph(gb) {
  // Write your code here
  let set = new Set();
  let ar = [];
  let min = Infinity;
  let max = 2;
  gb.sort((a, b) => a[0] - b[0]);
  //   for (let i = 0; i < gb.length - 1; i++) {
  //     temp = gb.filter((val, index) => val[0] == gb[i][0]);
  //     if (temp.length > 0) {
  //       for (let j = 0; j < temp.length - 1; j++)
  //         temp2 = gb.filter((val, index) => val[1] == temp[j]);
  //     }
  //   }
  for (let i = 0; i < gb.length - 1; i++) {
    if (i == 0) {
      if (gb[i][0] == gb[i + 1][0]) {
        set.add(gb[i]);
      }
    } else if (gb[i][0] == gb[i + 1][0] || gb[i][0] == gb[i - 1][0]) {
      set.add(gb[i]);
    }
  }
  gb.sort((a, b) => a[1] - b[1]);
  for (let i = 0; i < gb.length - 1; i++) {
    if (i == 0) {
      if (gb[i][1] == gb[i + 1][1]) {
        set.add(gb[i]);
      }
    } else if (gb[i][1] == gb[i + 1][1] || gb[i][1] == gb[i - 1][1]) {
      set.add(gb[i]);
    }
  }
  ar = Array.from(set);
  console.log(ar);
  let temp_set = new Set();
  let new_arr = [];
  temp_size = 0;
  for (let item of ar) {
    temp_set.add(...item);
  }
}

let bg = [
  [1, 5],
  [1, 6],
  [2, 4],
];
console.log(componentsInGraph(bg));

bg = [
  [1, 6],
  [2, 7],
  [3, 8],
  [4, 9],
  [2, 6],
];
console.log(componentsInGraph(bg));

console.log(componentsInGraph(bg));
