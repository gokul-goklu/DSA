const subStrings = (str) => {
  if (str.length <= 0) return "";
  let start = 0;
  let maxlength = 1;

  const evenOddString = (left, right) => {
    while (left >= 0 && right < str.length && str[left] == str[right]) {
      if (right - left + 1 > maxlength) {
        maxlength = right - left + 1;
        start = left;
      }
      left--;
      right++;
    }
  };

  for (let i = 0; i < str.length; i++) {
    evenOddString(i, i + 1);
    evenOddString(i - 1, i + 1);
  }

  return str.substring(start, start + maxlength);
};
const txt = "geeksskeeg";
console.log(subStrings(txt));
