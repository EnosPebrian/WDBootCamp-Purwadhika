function explore(graph, current, visited) {
  if (visited.has(String(current))) return 0;
  visited.add(String(current));
  let sum = 1;
  for (let item of graph[current]) {
    sum += explore(graph, item, visited);
  }
  return sum;
}

function componentsInGraph(gb) {
  // Write your code here
  let obj = {};
  let min = Infinity;
  let max = -Infinity;
  let visited = new Set();
  for (let item of gb) {
    if (!obj[item[0]]) {
      obj[item[0]] = [];
    }
    if (!obj[item[1]]) {
      obj[item[1]] = [];
    }
    obj[item[0]].push(item[1]);
    obj[item[1]].push(item[0]);
  }

  let sum_components = 0;
  for (let key in obj) {
    sum_components = explore(obj, key, visited);
    console.log(sum_components);
    if (sum_components > max) max = sum_components;
    if (sum_components < min && sum_components > 1) min = sum_components;

    // console.log(visited);
  }
  return [min, max];
}

let bg = [
  [1, 6],
  [2, 7],
  [3, 8],
  [4, 9],
  [2, 6],
];

console.log(componentsInGraph(bg));

bg = [
  [1, 5],
  [1, 6],
  [2, 4],
];
console.log(componentsInGraph(bg));

bg = [
  [1, 17],
  [5, 13],
  [7, 12],
  [5, 17],
  [5, 12],
  [2, 17],
  [1, 18],
  [8, 13],
  [2, 15],
  [5, 20],
];
console.log(componentsInGraph(bg));
