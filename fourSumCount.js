const fourSumCount = (num1, num2, num3, num4) => {
    const twoSumMap = new Map();
    let count = 0;

    for (const n1 of num1) {
        for (const n2 of num2) {
            const sum = n1 + n2;
            twoSumMap.set(sum, (twoSumMap.get(sum) || 0) + 1);
        }
    }

    for (const n3 of num3) {
        for (const n4 of num4) {
            const sum = n3 + n4;
            count += twoSumMap.get(0 - sum) || 0;
        }
    }

    return count;
};
