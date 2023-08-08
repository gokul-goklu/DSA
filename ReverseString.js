const stringRev = (str) => {
  let res = "";
  for (let i = str.length - 1; i >= 0; i--) {
    res = res + str[i];
  }
  console.log(res);
};

const rev = "Gokul";
stringRev(rev);
