// bubble sort

const bubbleSort = (inputArr) => {
  let n = inputArr.length;
  let steps = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (inputArr[i] > inputArr[j]) {
        [inputArr[i], inputArr[j]] = [inputArr[j], inputArr[i]];
        steps.push([...inputArr]);
      }
    }
  }
  return steps;
};

module.exports = { bubbleSort };
