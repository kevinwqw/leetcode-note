const getSum = (n) => {
    let sum = 0;
    while (n) {
        sum += (n % 10) ** 2;
        n = Math.floor(n / 10);
    }
    return sum;
};

const isHappy = (n) => {
    let resSet = new Set();
    while (n !== 1 && !resSet.has(n)) {
        resSet.add(n);
        n = getSum(n);
    }
    return n === 1;
};
