// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
// connect: undefined


// function chunk(array, size) {
//   const chunked = [];
//
//   for (let element of array) {
//     const last = chunked[chunked.length - 1];
//
//     if (!last || last.length === size) {
//       chunked.push([element]);
//     } else {
//       last.push(element);
//     }
//   }
//
//   return chunked;
// }

function chunk<T>(array: Array<T>, size: number) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }

  return chunked;
}


test('function chunk exists', () => {
  expect(typeof chunk).toEqual('function');
});

test('chunk divides an array of 10 elements with chunk size 2', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const chunked = chunk(arr, 2);

  expect(chunked).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]);
});

test('chunk divides an array of 3 elements with chunk size 1', () => {
  const arr = [1, 2, 3];
  const chunked = chunk(arr, 1);

  expect(chunked).toEqual([[1], [2], [3]]);
});

test('chunk divides an array of 5 elements with chunk size 3', () => {
  const arr = [1, 2, 3, 4, 5];
  const chunked = chunk(arr, 3);

  expect(chunked).toEqual([[1, 2, 3], [4, 5]]);
});

test('chunk divides an array of 13 elements with chunk size 5', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  const chunked = chunk(arr, 5);

  expect(chunked).toEqual([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]]);
});
