function hasContiguousSubarrayWithSum(arr, target) {
  let start = 0;
  let currentSum = arr[0];

  for (let end = 1; end <= arr.length; end++) {
    while (currentSum > target && start < end - 1) {
      currentSum -= arr[start];
      start++;
    }

    if (currentSum === target) {
      return true;
    }

    if (end < arr.length) {
      currentSum += arr[end];
    }
  }

  return false;
}

const arr = [4, 2, 7, 1, 9, 5];
const target = 15;
console.log(hasContiguousSubarrayWithSum(arr, target));
