const occurance = (num) => {
  const mapping = {};
  for (let i = 0; i < num.length; i++) {
    const count = num[i];
    if (mapping.hasOwnProperty(num[i])) {
      mapping[count] = mapping[count] + 1;
    } else mapping[count] = 1;
  }
  return mapping;
};

const num = [1, 2, 87, 4, 5, 23, 87, 3, 2, 5, 1, 87];
console.log(occurance(num));
