function componentsInGraph(gb) {
  // Write your code here
  //find nilai kembar ke 1
  //kalo ada anaknya >> find nilai yang kembar dengan anaknya di sebelah kanan,
  //kalo ada ankanya yang kiri >> find nilai kembar anaknya yang dikiri
  //object
  let map = new Map();
  let unique_numb = new Set();
  for (let ar of gb) {
    unique_numb.add(ar[0]);
    unique_numb.add(ar[1]);
  }
  unique_numb = Array.from(unique_numb);
  // console.log(`unique numb`, unique_numb);

  function addNode(num) {
    map.set(num, []);
  }

  function addEdge(num1, num2) {
    map.get(num1).push(num2);
    map.get(num2).push(num1);
  }

  unique_numb.forEach(addNode);
  // console.log(map);
  // gb.forEach(addEdge(...gb));
  for (item of gb) {
    addEdge(...item);
  }
  let newset = new Set();
  let newarray = [];
  for (let key of map.keys()) {
    newset.add(...map.get(key));
  }

  console.log(`newset`, newset);
  console.log(map);
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
