/**
 * leetCode index: 209
 * input: target = 7, nums = [2,3,1,2,4,3]
 * output: 2
 *
 * @param {number []} arr
 * @param {number} target
 * @return {number}
 */
const minSubArrayLength = (arr, target) => {
    let left = 0;
    let right = 0;
    let sum = 0;
    let ans = Infinity;

    while (right < arr.length) {
        sum += arr[right];
        while (sum >= target) {
            ans = Math.min(ans, right - left + 1);
            sum -= arr[left++];
        }
        right++;
    }

    return ans === Infinity ? 0 : ans;
};
