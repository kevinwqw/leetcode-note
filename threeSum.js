const threeSum = (nums) => {
    const res = [];
    const len = nums.length;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < len; i++) {
        let l = i + 1;
        let r = len - 1;
        let iNum = nums[i];
        if (iNum > 0) return res; // 有序数组，第一个值大于0，其余值和不可能等于0
        if (iNum === nums[i - 1]) continue; // 去重
        while (l < r) {
            let lNum = nums[l];
            let rNum = nums[r];
            let threeSum = iNum + lNum + rNum;
            if (threeSum < 0) l++;
            else if (threeSum > 0) r--;
            else {
                res.push([iNum, lNum, rNum]);
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
};
