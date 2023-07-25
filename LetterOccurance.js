const letterOccurance = (word) => {
  word = word.toLowerCase().trim();
  const mapping = {};
  for (let i = 0; i < word.length; i++) {
    if (/[a-zA-Z]/.test(word[i])) {
      if (mapping.hasOwnProperty(word[i]))
        mapping[word[i]] = mapping[word[i]] + 1;
      else mapping[word[i]] = 1;
    }
  }
  return mapping;
};

console.log(letterOccurance("whbwibqidi87udbfifb"));
