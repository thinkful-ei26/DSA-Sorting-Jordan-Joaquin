'use strict';
let bigO = 0;
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  //find middle, manually arr.length/2
  const middle = Math.floor(arr.length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle, arr.length);

  // recursion to repeat as many times as needed

  left = mergeSort(left, bigO++);
  right = mergeSort(right, bigO++);

  return merge(left, right, arr);
}

function merge(left, right, arr, counter) {
  //remerge into a single array. set up indices
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      arr[outputIndex++] = left[leftIndex++];
    } else {
      arr[outputIndex++] = right[rightIndex++];
    }
  }
  for (let i = leftIndex; i < left.length; i++) {
    arr[outputIndex++] = left[i];
  }
  for (let i = rightIndex; i < right.length; i++) {
    arr[outputIndex++] = right[i];
  }
  return arr;
}

let array = [1,2,3,4,5,6,77,8,-5];
console.log(bigO);
console.log(mergeSort(array, bigO));
console.log(bigO);
