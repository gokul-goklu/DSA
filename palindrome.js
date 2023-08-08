const palindromicString = (str) => {
  str = str.toLowerCase().trim();
  let j = str.length - 1,
    c = 0;
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] != str[j--]) {
      c = 1;
      break;
    }
  }
  if (c == 0) {
    console.log("palindrome");
  } else console.log("not palindrome");
};

let str = "Malayalam";
palindromicString(str);
