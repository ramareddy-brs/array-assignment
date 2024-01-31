function findKthLargestAndSmallest() {
  const inputArray = document.getElementById('inputArray').value.split(',').map(Number);
  let k = document.getElementById('inputNum').value;

  for (let i = 0; i < inputArray.length; i++) {
    for (let j = 0; j < inputArray.length - 1; j++) {
      if (inputArray[j] < inputArray[j + 1]) {
        let temp = inputArray[j];
        inputArray[j] = inputArray[j + 1];
        inputArray[j + 1] = temp;
      }
    }
  }
  var kthLargest = inputArray[k - 1];

  for (let i = 0; i < inputArray.length; i++) {
    for (let j = 0; j < inputArray.length - 1; j++) {
      if (inputArray[j] > inputArray[j + 1]) {
        let temp = inputArray[j];
        inputArray[j] = inputArray[j + 1];
        inputArray[j + 1] = temp;
      }
    }
  }

  var kthSmallest = inputArray[k - 1];

  const resultElement = document.getElementById('result');
  resultElement.innerHTML = `<p>${k} Largest Element: ${kthLargest}</p><p>${k} Smallest Element: ${kthSmallest}</p>`;
}