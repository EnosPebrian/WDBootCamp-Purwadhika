function isBalanced(s) {
  // Write your code here
  //   if (!s % 2) {
  //     return "NO";
  //   }
  s = s.replace(/[^\{\}\[\]\(\)]/g, "");
  let map = new Map();
  map.set("(", ")");
  map.set("{", "}");
  map.set("[", "]");
  let temp = [];
  let start = temp.length;
  for (let i = 0; i < s.length; i++) {
    // console.log(`here`, temp);
    if (s[i] != ")" && s[i] != "}" && s[i] != "]") {
      temp.push(s[i]);
    } else {
      if (s[i] != map.get(temp.pop())) {
        return "NO";
      }
    }
    // console.log(`there`, temp);
  }
  if (temp.length == start) {
    return "YES";
  } else return "NO";
}

let s = "{[(aa)]bbbbb}";
console.log(isBalanced(s));
s = "{[(])}";
console.log(isBalanced(s));
s = "{{[[(())]]}}";
console.log(isBalanced(s));
s = "{(([])[])[]}";
console.log(isBalanced(s));
s = "{(([])[])[]]}";
console.log(isBalanced(s));
s = "{(([])[])[]}[]";
console.log(isBalanced(s));
s = "[()]{}{[()()](          )}";
console.log(isBalanced(s));
