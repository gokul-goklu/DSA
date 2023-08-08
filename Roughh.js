const palindrome = (str) => {
  str = str.toLowerCase().trim();
  let v = str.length - 1;
  for (let i = 0; i < str.length; i++) {
    let first = str[i];
    let last = str[v - i];
    if (first != last) return "not palindrome";
  }
  return "palindrme";
};
const txt = "maddfam";
console.log(palindrome(txt));
