/**
 * Leetcode index: 1
 *
 * input: nums = [2,7,11,15], target = 9
 * output: [0,1]
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    const mapRecord = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (mapRecord.has(target - nums[i])) return [i, mapRecord.get(target - nums[i])];
        mapRecord.set(nums[i], i);
    }

    return [];
};
