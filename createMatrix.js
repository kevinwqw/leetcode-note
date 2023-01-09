/**
 *
 * @param {number} n
 * @return {number[][]}
 */

const createMatrix = (n) => {
    let startX = 0;
    let startY = 0;
    let loop = Math.floor(n / 2);
    let mid = Math.floor(n / 2);
    let count = 1;
    let offset = 1;
    const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));

    while (loop--) {
        let r = startX;
        let c = startY;

        for (; c < n - offset; c++) {
            matrix[r][c] = count++;
        }

        for (; r < n - offset; r++) {
            matrix[r][c] = count++;
        }

        for (; c > startY; c--) {
            matrix[r][c] = count++;
        }

        for (; r > startX; r--) {
            matrix[r][c] = count++;
        }

        startX++;
        startY++;
        offset++;
    }

    if (n % 2 === 1) {
        matrix[mid][mid] = count;
    }

    return matrix;
};
