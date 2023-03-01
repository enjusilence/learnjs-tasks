var maxSequence = function(arr) {
  let currentMax = 0;
  let max = 0;
  for (let num of arr) {
    currentMax = Math.max(currentMax + num, num);
    max = Math.max(currentMax, max);
  }
  return max;
}