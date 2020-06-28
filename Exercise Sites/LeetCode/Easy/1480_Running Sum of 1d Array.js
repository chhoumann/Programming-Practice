/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let runsum = 0;
    const sum = nums.map((cur) => runsum += cur);
    return sum;
};