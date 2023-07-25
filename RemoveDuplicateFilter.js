const arrayWithDuplicates = [1, 2, 3, 2, 4, 1];

const uniqueArray = arrayWithDuplicates.filter(
  (item, index) => arrayWithDuplicates.indexOf(item) === index
);

console.log(uniqueArray); // [1, 2, 3, 4]
