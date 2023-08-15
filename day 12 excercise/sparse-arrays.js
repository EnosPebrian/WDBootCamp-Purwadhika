function matchingStrings(stringList, queries) {
  // Write your code here
  let occurence = [];
  for (let i = 0; i < queries.length; i++) {
    occurence.push(stringList.filter((val) => val == queries[i]).length);
  }
  return occurence;
}

stringList = ["ab", "ab", "abc"];
queries = ["ab", "abc", "bc"];

console.log(matchingStrings(stringList, queries));
