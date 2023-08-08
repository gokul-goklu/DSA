const longestPalin = (str) => {
  if (str.length <= 0) return "";

  let maxlength = 1;
  let start = 0;
  const oddEven = (left, right) => {
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
    oddEven(i - 1, i + 1); //odd
    oddEven(i, i + 1); //even
  }
  return str.substring(start, start + maxlength);
};

const txt = "babad";
console.log(longestPalin(txt));

// b  a  b  a  d

// t g o k o g
