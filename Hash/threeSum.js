/**
 * Leetcode index: 15
 *
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
    const res = [];
    const len = nums.length;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < len; i++) {
        if (nums[i] > 0) return res;
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let l = i + 1;
        let r = len - 1;
        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r];
            if (sum > 0) {
                r--;
            } else if (sum < 0) {
                l++;
            } else {
                res.push([nums[i], nums[l], nums[r]]);
                while (l < r && nums[l] === nums[l + 1]) {
                    l++;
                }
                while (l < r && nums[r] === nums[r - 1]) {
                    r--;
                }
                l++;
                r--;
            }
        }
    }

    return res;
};
