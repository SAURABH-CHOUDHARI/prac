const nums = [1, 5, 3, 1, 3, 5, 6];


const frequencyMap = {};

for (const num of nums) {
    if (frequencyMap[num]) {
        frequencyMap[num]++;
    } else {
        frequencyMap[num] = 1;
    }
}

for (const key in frequencyMap) {
    console.log(`${key}-${frequencyMap[key]}`);
}
