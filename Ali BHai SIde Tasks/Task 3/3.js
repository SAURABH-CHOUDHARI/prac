function thirdMax(nums) {

    const distinctNums = [...new Set(nums)];


    distinctNums.sort((a, b) => b - a);


    return distinctNums.length >= 3 ? distinctNums[2] : distinctNums[0];
}


console.log(thirdMax([3, 2, 1]));
console.log(thirdMax([1, 2]));
console.log(thirdMax([2, 2, 3, 1])); 