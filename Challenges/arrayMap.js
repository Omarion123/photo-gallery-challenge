function hasContiguousSubarrayWithSum(arr, target) {
  let start = 0;
  let currentSum = arr[0];

  if (arr.length > 1 && arr.length < 100000) {
    for (let end = 1; end <= arr.length; end++) {
      if (
        -Infinity < (currentSum, arr[end], target) &&
        (currentSum, arr[end], target) < +Infinity
      ) {
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
    }

    return false;
  } else {
    return "invalid array length";
  }
}

const arr = [4, 2, 7, 1, 9, 5];
const target = 15;
console.log(hasContiguousSubarrayWithSum(arr, target));
