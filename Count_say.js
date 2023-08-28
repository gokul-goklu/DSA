const num = 4;
const countsay = (num) => {
  let str = "1";
  if (num == 1) return 1;

  for (let i = 1; i < num; i++) {
    let str2 = "",
      c = 1;
    for (let j = 0; j < str.length; j++) {
      if (str[j] == str[j + 1]) {
        c++;
      } else {
        str2 = str2 + c + str[j];
      }
    }
    str = str2;
  }
  return str;
};

console.log(countsay(num));
