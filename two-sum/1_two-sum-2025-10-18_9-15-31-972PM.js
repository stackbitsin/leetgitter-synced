/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
     const indexed = nums.map((val, idx) => [val, idx]);
    indexed.sort((a, b) => a[0] - b[0]); // Sort by number values

    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const sum = indexed[left][0] + indexed[right][0];
        if (sum === target) {
            return [indexed[left][1], indexed[right][1]];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
};