/**
 * Leetcode index: 454
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 */
const fourSum = (nums1, nums2, nums3, nums4) => {
    const twoSumRecord = new Map();
    for (const num1 of nums1) {
        for (const num2 of nums2) {
            twoSumRecord.set(num1 + num2, (twoSumRecord.get(num1 + num2) || 0) + 1);
        }
    }

    let count = 0;
    for (const num3 of nums3) {
        for (const num4 of nums4) {
            if (twoSumRecord.has(-num3 - num4)) count += twoSumRecord.get(-num3 - num4);
        }
    }

    return count;
};
