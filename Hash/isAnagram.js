/**
 * Leetcode index: 242
 *
 * input: s = "anagram", t = "nagaram"
 * output: true
 *
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
    if (s.length !== t.length) return false;
    const record = new Array(26).fill(0);
    const baseCharCode = 'a'.charCodeAt();
    for (const letter of s) {
        record[letter.charCodeAt() - baseCharCode]++;
    }

    for (const letter of t) {
        if (!record[letter.charCodeAt() - baseCharCode]) return false;
        record[letter.charCodeAt() - baseCharCode]--;
    }

    return true;
};
