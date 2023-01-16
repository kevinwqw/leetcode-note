/**
 * Leetcode index: 383
 *
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = (ransomNote, magazine) => {
    const record = new Map();
    for (const letter of magazine) {
        record.set(letter, (record.get(letter) || 0) + 1);
    }

    for (const letter of ransomNote) {
        if (!record.get(letter)) {
            return false;
        } else {
            record.set(letter, record.get(letter) - 1);
        }
    }

    return true;
};
