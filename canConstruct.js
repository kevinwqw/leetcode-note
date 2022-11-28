const canConstruct = (ransomNote, magazine) => {
    const strArr = new Array(26).fill(0);
    const base = 'a'.charCodeAt();
    for (const s of magazine) {
        strArr[s.charCodeAt() - base]++;
    }
    for (const s of ransomNote) {
        const index = s.charCodeAt() - base;
        if (!strArr[index]) return false;
        strArr[index]--; // strArr中的值只有默认值0和填入值1，如果已经找到，则需将找到的值回退为0，避免重复
    }
    return true;
};
