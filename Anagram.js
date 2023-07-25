const angaramWords = (str1, str2) => {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  if (str1.length != str2.length) return false;
  let result;
  for (let i = 0; i < str1.length; i++) {
    result = false;
    for (let j = 0; j < str2.length; j++) {
      if (str1[i] == str2[j]) result = true;
    }
    if (result != true) return false;
  }
  return result;
};

const str1 = "Gokul";
const str2 = "loguk";
console.log(angaramWords(str1, str2));
