function rotateLeft(d, arr) {
  // Write your code here
  if (d == 0) return arr;
  let temp = arr.shift();
  arr.push(temp);
  d -= 1;
  return rotateLeft(d, arr);
}

array1 = ["a", {}, [], "b"];
console.log(rotateLeft(5, array1));

console.log(`hourglas-----------------`);

function hourglassSum(arr) {
  // Write your code here
  let array_hourglass = [];
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = 0; j < arr.length - 2; j++) {
      let counter = 0;
      for (let k = 0; k < 3; k++) {
        for (let l = 0; l < 3; l++) {
          if (k == 1 && l == 0) continue;
          if (k == 1 && l == 2) continue;
          counter += Number(arr[i + k][j + l]); //0 0 1 2 // 1 0 1 2 //2 0 1 2
        }
      }
      array_hourglass.push(counter);
    }
  }
  return array_hourglass.sort((a, b) => a - b)[array_hourglass.length - 1];
}
a = [
  ["1", "1", "1", "0", "0", "0"],
  ["0", "1", "0", "0", "0", "0"],
  ["1", "1", "1", "0", "0", "0"],
  ["0", "0", "2", "4", "4", "0"],
  ["0", "0", "0", "2", "0", "0"],
  ["0", "0", "1", "2", "4", "0"],
];

console.log(hourglassSum(a));

ar1 = [5, 4, 3, 4, 5];

console.log(`IndexProduct-----------------`);
function solve(arr) {
  // Write your code here
  let max = 0;
  let left_i;
  let right_i;
  for (let index = 0; index < arr.length; index++) {
    if (index == 1 || index == arr.length - 1) {
      continue;
    }
    left_i = 0;
    right_i = 0;
    let templeft = Number(index) - 1;
    for (let i = templeft; i >= 0; i--) {
      if (arr[i] > arr[index]) {
        left_i = i + 1;
        break;
      }
    }
    let temp = Number(index) + 1;
    for (let j = temp; j < arr.length; j++) {
      if (arr[j] > arr[index]) {
        right_i = j + 1;
        break;
      }
    }
    max < left_i * right_i ? (max = left_i * right_i) : null;
  }
  return max;
}

console.log(solve(ar1));

// function solve(arr) {
//   // Write your code here
//   let container = [];
//   let left_i;
//   let right_i;
//   for (let index in arr) {
//     if (index == 0 || index == arr.length - 1) {
//       container.push(0);
//       continue;
//     }
//     left_i = 0;
//     right_i = 0;
//     for (let i = 0; i < index; i++) {
//       arr[i] > arr[index] ? (left_i = i + 1) : null;
//     }
//     let temp = Number(index) + 1;
//     for (let j = temp; j < arr.length; j++) {
//       if (arr[j] > arr[index]) {
//         right_i = j + 1;
//         break;
//       }
//     }
//     container.push(left_i * right_i);
//   }
//   return container.sort()[container.length - 1];
// }

function hasCycle(Nodehead) {
  //pass
  function hasCycle(Nodehead) {
    //pass
    var temp = new Array();
    while (Nodehead != null) {
      if (temp.filter((val) => val == Nodehead).length) return true;
      temp.push(Nodehead);
      Nodehead = Nodehead.next;
    }
    return false;
  }
}

// We create a class for each node within the stack
class Node {
  // Each node has two properties, its value and a pointer that indicates the node that follows
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// We create a class for the stack
class Stack {
  // The stack has three properties, the first node, the last node and the stack size
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  // The push method receives a value and adds it to the "top" of the stack
  push(val) {
    var newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      var temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }
  // The pop method eliminates the element at the "top" of the stack and returns its value
  pop() {
    if (!this.first) return null;
    var temp = this.first;
    if (this.first === this.last) {
      this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.value;
  }
}

const stck = new Stack();

stck.push("value1");
stck.push("value2");
stck.push("value3");

console.log(stck.first.value); /* 
      Node {
      value: 'value3',
      next: Node { value: 'value2', next: Node { value: 'value1', next: null } }
      }
  */
console.log(stck.last); // Node { value: 'value1', next: null }
console.log(stck.size); // 3

stck.push("value4");
console.log(stck.pop()); // value4
