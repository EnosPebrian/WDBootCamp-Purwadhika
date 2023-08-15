function swapNodes(indexes, queries) {
  // Write your code here
  // console.log(indexes);
  // console.log(queries);
  let new_map = new Map();

  new_map.set(1, 1);
  let temp = [];
  for (let item of indexes) {
    temp.push(...item);
  }
  //   console.log(temp);
  let i = 0;
  let counter = 0;
  let j = 2;
  while (i < temp.length) {
    // console.log(`j`, j, `counter`, counter);
    new_map.set(j.toString() + " " + counter, temp[i]);
    i++;
    counter++;

    new_map.set("max_map_depth", j);
    if (counter >= 2 ** (j - 1)) {
      counter = 0;
      j++;
    }
  }
  console.log(new_map);
  function swap(queries1) {
    let q = queries1 + 1;
    // console.log(`q`, q, `max depth`, new_map.get(`max_map_depth`));
    for (i = q; i <= new_map.get(`max_map_depth`); i += queries1) {
      for (j = 0; j < 2 ** (q - 1); j += 2) {
        //swap value
        let key = i.toString() + " " + j;
        let key1 = i.toString() + " " + (j + 1);
        let temp = new_map.get(key);
        new_map.set(key, new_map.get(key1));
        new_map.set(key1, temp);
        // console.log(`theree`);
      }
    }
    let temp_arr = [];
    for (i = q + 1; i <= new_map.get(`max_map_depth`); i++) {
      temp_arr = [];
      for (j = 0; j < 2 ** (i - 1); j++) {
        //pass
        temp_arr.push(new_map.get(i.toString() + " " + j));
      }
      console.log(`temp_arr`, temp_arr);
      let a = temp_arr.splice(0, 2 ** (i - 2) / 2);
      temp_arr.splice(2 ** (i - 2) / 2 - 1, 0, ...a);
      console.log(`temp_arr after splice`, temp_arr);
      for (j = 0; j < 2 ** (q - 1); j++) {
        //pass
        new_map.set(i.toString() + " " + j, temp_arr[j]);
      }
    }
  }

  for (i = 0; i < queries.length; i++) {
    swap(queries[i]);
    console.log(`sini`, queries[i]);
  }
  console.log(new_map);
}

let indexes = [
  [2, 3],
  [-1, -1],
  [-1, -1],
];
let q = [1, 1];
// swapNodes(indexes, q);

indexes = [
  [2, 3],
  [4, 5],
  [6, -1],
  [-1, 7],
  [8, 9],
  [10, 11],
  [12, 13],
  [-1, 14],
  [-1, -1],
  [15, -1],
  [16, 17],
  [-1, -1],
  [-1, -1],
  [-1, -1],
  [-1, -1],
  [-1, -1],
  [-1, -1],
];

q = [2, 3];
// swapNodes(indexes, q);

indexes = [
  [2, 3],
  [4, -1],
  [5, -1],
  [6, -1],
  [7, 8],
  [-1, 9],
  [-1, -1],
  [10, 11],
  [-1, -1],
  [-1, -1],
  [-1, -1],
];

q = [2, 4];
swapNodes(indexes, q);

indexes = [
  [2, 3],
  [-1, 4],
  [-1, 5],
];
q = [2];
// swapNodes(indexes, q);
