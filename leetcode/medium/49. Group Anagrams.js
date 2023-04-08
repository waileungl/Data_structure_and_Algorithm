var groupAnagrams = function (strs) {
    if (strs.length === 1) return [strs]
    let map = {};
    for (let i in strs) {
        let containAna = "check";

        Object.keys(map).forEach(item => {
            if (isAnagram(strs[i], item)) {
                containAna = item
            }
        })
        if (containAna !== "check") {
            map[containAna].push(strs[i])
        } else {
            map[strs[i]] = [strs[i]]
        }
    }
    return Object.values(map)
};

const isAnagram = (s, t) => {
    if (s.length !== t.length) return false
    if(s.length === 0) return true

    let map = {}


    for (let i of s) {
        if (map[i] !== 0) {
            map[i]++
        } else {
            map[i] = 1
        }
    }

    for (let j of t) {
        if (!map[j]) {
            return false
        } else {
            map[j]--
        }
    }
    return Math.max(...Object.values(map)) === 0
}
console.log(groupAnagrams(["", ""]))