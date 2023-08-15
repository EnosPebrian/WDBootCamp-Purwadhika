const Power = (a, b) => {
  return a ** b;
};

const Add = (a, b) => {
  return a + b;
};

module.exports = { Power, Add };

console.log(Add(Power(3, 3), 3));
