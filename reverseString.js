const reverseString = (str) => {
    const len = str.length;
    let l = 0;
    let r = len - 1;
    while (i < j) {
        const temp = str[l];
        str[l] = str[r];
        str[r] = temp;
    }
    return str;
};
