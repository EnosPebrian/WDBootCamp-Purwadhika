console.log(Boolean(true) + Boolean(9));

console.log(3 + "3");

console.log(1 - 1 + 1 - 1 * 2);

let Person = { name: "Jhonny", Age: 26 };

let a = Person;

a.name = "Owam";

console.log(Person);

console.log(3 + +"3");

a = `aaaaa
aaaaa`;
console.log(a);

console.log(["a", "b"] === ["a", "b"]);

switch (`1`) {
  case `1`:
    console.log(`aaa`);
}

a = [`a`, "b", "c"];
b = ["1", "2", "3"];
console.log(a.toString());
console.log(a.concat(b));

console.log(a.includes("z"));

let c = { name: "naanaa", age: 17 };
let d = { nani: "naanaa", af: 17 };
for (let key in c) {
  console.log(key);
}

[a, b] = ["a", "b"];
a = [`a`, "b", "c"];
b = ["1", "2", "3"];
let e = { ...a, ...b };
console.log(a);
console.log(b);
console.log(e);

let set = new Set();
set.add("a");
set.add("b");
set.add("c");
set.add("a");

console.log(set.size);
console.log(set.entries());
set.clear();
console.log(set);
