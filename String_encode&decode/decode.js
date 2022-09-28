// String Decode
//  * Decodes the given string by duplicating each character by the following int
//  * amount if there is an int after the character

const strA = 'a3b2c1d3';
const expectedA = 'aaabbcddd';

const strB = 'a3b2c12d10';
const expectedB = 'aaabbccccccccccccdddddddddd';

function decode(str) {
    newStr = '';
    for (i = 0; i < str.length; i++) {
        count = 0;
        if(Number.isInteger(parseInt(str[i])) && Number.isInteger(parseInt(str[i + 1]))){
            count += parseInt(str[i] + str[i+1])
        } else if(Number.isInteger(parseInt(str[i]))&& !Number.isInteger(parseInt(str[i - 1]))) {
            count += parseInt(str[i])
        }
        for (j = 0; j < count; j++) {
            newStr += str[i - 1];
            
        }
    }

    return newStr;
}

console.log(decode(strA));
console.log(decode(strB));