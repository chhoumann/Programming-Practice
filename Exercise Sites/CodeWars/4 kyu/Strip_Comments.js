function solution(input, markers) {
  let inputArray = input.split('\n');

  for(let i = 0; i < inputArray.length; i++) {
    for(let j = 0; j < markers.length; j++) {
      inputArray[i] = inputArray[i].split('');
      const markerAt = inputArray[i].indexOf(markers[j]);
      if (markerAt != -1) inputArray[i] = inputArray[i].splice(0, markerAt - 1);
      inputArray[i] = inputArray[i].join('');
    }
  }

  return inputArray.join('\n');
};

