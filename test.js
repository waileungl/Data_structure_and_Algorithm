function firstNonRepeatingLetter(s) {
    const count = {};
    for (let char of s) {
        let lowerCaseChar = char.toLowerCase();
        if (count[lowerCaseChar] !== undefined) {
            count[lowerCaseChar]++;
        } else {
            count[lowerCaseChar] = 1;
        }
    }

    for (let char of s) {
        if (count[char.toLowerCase()] === 1) {
            return char;
        }
    }

    return '';
}

//
console.log(firstNonRepeatingLetter("a"))
console.log(firstNonRepeatingLetter("stttttnhttrbss"))
console.log(firstNonRepeatingLetter("moonmeeeeen"))