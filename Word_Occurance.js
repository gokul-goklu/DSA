const occuranceCount = (names) => {
  const mapping = {};
  for (let i = 0; i < names.length; i++) {
    names[i] = names[i].toLowerCase();
    if (mapping.hasOwnProperty(names[i])) {
      mapping[names[i]] = mapping[names[i]] + 1;
    } else mapping[names[i]] = 1;
  }
  return mapping;
};

const names = [
  "ankit",
  "chirag",
  "mitesh",
  "mahesh",
  "ankit",
  "sanket",
  "Sanket",
];
console.log(occuranceCount(names));
