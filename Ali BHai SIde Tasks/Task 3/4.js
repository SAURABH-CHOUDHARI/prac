
function findMinValueToBalance(nums) {
    const n = nums.length;
    if (n % 2 !== 0) {
        throw new Error("Array size must be even.");
    }


    const leftSum = nums.slice(0, n / 2).reduce((a, b) => a + b, 0);
    const rightSum = nums.slice(n / 2).reduce((a, b) => a + b, 0);


    const diff = Math.abs(leftSum - rightSum);

    return diff;
}

// Test cases
console.log(findMinValueToBalance([1, 3, 1, 2, 4, 3]));
console.log(findMinValueToBalance([1, 2, 1, 2, 1, 3])); 
