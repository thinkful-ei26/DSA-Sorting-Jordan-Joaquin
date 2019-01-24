'use strict';
// BUBBLE SORT, BIG O n^2
function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
  //   return array;
}
// console.log(swap([2, 8, 7, 4], 0,1));

function bubbleSort2(array) {
  let swaps = 0;
  for (let i = 0; i < array.length - 1; i++) {
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1);
        swaps++;
      }
    }
  }
  return array;
}

//MERGE SORT
// mergeSort splits the argument, the next function actually merges in a sorted order
function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  left = mergeSort(left);
  right = mergeSort(right);
  return merge(left, right, array);
}

function merge(left, right, array) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      array[outputIndex++] = left[leftIndex++];
    } else {
      array[outputIndex++] = right[rightIndex++];
    }
  }

  for (let i = leftIndex; i < left.length; i++) {
    array[outputIndex++] = left[i];
  }

  for (let i = rightIndex; i < right.length; i++) {
    array[outputIndex++] = right[i];
  }
  return array;
}

//  QUICK SORT O (n log n), worst case n^2, occurs when sorted a sorted data set.
function quickSort(array, start = 0, end = array.length) {
  if (start >= end) {
    return array;
  }
  const middle = partition(array, start, end);
  array = quickSort(array, start, middle);
  array = quickSort(array, middle + 1, end);
  return array;
}

function partition(array, start, end) {
  const pivot = array[end - 1];
  let j = start;
  for (let i = start; i < end - 1; i++) {
    if (array[i] <= pivot) { // [89, 6, 72]
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end - 1, j);
  return j;
}

console.log(partition([1,5,0,4, 5], 0, 5));
// console.log(quickSort([5, 4, 7, 8, 2], 0, 5));
// console.log(bubbleSort2([88, 33, 99, 22, 54]));
