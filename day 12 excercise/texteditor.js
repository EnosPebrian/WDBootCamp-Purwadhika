function processData(input) {
  //Enter your code here
  var S = "";
  var temp_cache = [];

  function action(string) {
    let temp = string.split(" ");
    if (temp[0] == 1) {
      S += temp[1];
      temp_cache.push(temp);
    } else if (temp[0] == 2) {
      temp1 = S.substring(0, S.length - temp[1]);
      deleted_char = S.substring(S.length - temp[1]);
      temp.push(deleted_char);
      temp_cache.push(temp);
    } else if (temp[0] == 3) {
      console.log(S[temp[1] - 1]);
    } else if (temp[4] == 4) {
      k = temp_cache.pop();
      if (k[0] == 1) {
        S.substring(0, S.length - k[1].length);
      } else if (k[0] == 2) {
        S += k[2];
      }
    }
  }
}
