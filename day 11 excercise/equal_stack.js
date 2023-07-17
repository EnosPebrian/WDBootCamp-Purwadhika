// function equalStacks(h1, h2, h3) {
//   //   Write your code here
//   let array = [h1, h2, h3];
//   //   function check_equal(arrayh) {
//   //     if (
//   //       arrayh[0].reduce((acc, val) => acc + val, 0) ==
//   //         arrayh[1].reduce((acc, val) => acc + val, 0) &&
//   //       arrayh[0].reduce((acc, val) => acc + val, 0) ==
//   //         arrayh[2].reduce((acc, val) => acc + val, 0)
//   //     ) {
//   //       return true;
//   //     }
//   //     return false;
//   //   }

//   function pop_the_largest_stack(arrayh) {
//     let temp = [];
//     for (let i in arrayh) {
//       temp.push([arrayh[i].reduce((acc, val) => acc + val, 0), arrayh[i]]);
//     }
//     temp.sort((a, b) => b[0] - a[0]);
//     console.log(`temp`, temp);
//     if (temp[0][0] == temp[1][0] && temp[0][0] == temp[2][0]) {
//       return temp[0][0];
//     } else {
//       temp[0][1].shift();
//       return false;
//     }
//   }

//   while (true) {
//     if (pop_the_largest_stack(array)) {
//       break;
//     }
//   }
//   return h1.reduce((acc, val) => acc + val, 0);
// }

function equalStacks(h1, h2, h3) {
  function sum(h) {
    let accum = 0;
    for (let i of h) {
      accum += i;
    }
    return accum;
  }
  function pop_the_greatest_stack(h1, h2, h3, a, b, c) {
    if (Math.max(a, b, c) == a) {
      h1.shift();
    } else if (Math.max(a, b, c) == b) {
      h2.shift();
    } else if (Math.max(a, b, c) == c) {
      h3.shift();
    }
  }
  let a = sum(h1);
  let b = sum(h2);
  let c = sum(h3);
  let length_h1 = h1.length;
  let length_h2 = h2.length;
  let length_h3 = h3.length;
  while (true) {
    if (a == b && a == c) {
      break;
    }
    pop_the_greatest_stack(h1, h2, h3, a, b, c);
    if (length_h1 != h1.length) {
      a = sum(h1);
      length_h1 = h1.length;
    }
    if (length_h2 != h2.length) {
      b = sum(h2);
      length_h2 = h2.length;
    }
    if (length_h3 != h3.length) {
      c = sum(h3);
      length_h3 = h3.length;
    }
  }
  return a;
}

h1 = [3, 2, 1, 1, 1];
h2 = [4, 3, 2];
h3 = [1, 1, 4, 1];
h4 = [1, 2, 1, 1];
h5 = [1, 1, 2];
h6 = [1, 1];
console.log(equalStacks(h1, h2, h3));

console.log(equalStacks(h4, h5, h6));
