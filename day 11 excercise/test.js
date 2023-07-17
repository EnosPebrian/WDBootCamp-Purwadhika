function permute(input) {
  var permArr = [],
    usedChars = [];
  return (function main() {
    for (var i = 0; i < input.length; i++) {
      var ch = input.splice(i, 1)[0];
      usedChars.push(ch);
      if (input.length == 0) {
        console.log(`sini`, usedChars);
        permArr.push(usedChars.slice());
        console.log(`sana`, `i`, i, `ch`, ch, usedChars, `input`, input);
      }
      console.log(`here`, `i`, i, `ch`, ch, usedChars, `input`, input);
      main();
      console.log(`there`, `i`, i, `ch`, ch, usedChars, `input`, input);
      input.splice(i, 0, ch);
      console.log(`thereee`, `i`, i, `ch`, ch, usedChars, `input`, input);
      usedChars.pop();
      console.log(`akhir`, `i`, i, `ch`, ch, usedChars, `input`, input);
    }
    return permArr;
  })();
}

console.log(JSON.stringify(permute([5, 3, 7, 1])));
