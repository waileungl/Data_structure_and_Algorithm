// ---------- problem # 1---------------------------------

// /* 
//   Given an array of objects / dictionaries to represent new inventory,
//   and an array of objects / dictionaries to represent current inventory,
//   update the quantities of the current inventory

//   if the item doesn't exist in current inventory, add it to the inventory
//   return the current inventory after updating it.
// */

const newInv1 = [
    { name: "Grain of Rice", quantity: 9000 },
    { name: "Peanut Butter", quantity: 50 },
    { name: "Royal Jelly", quantity: 20 },
];
const currInv1 = [
    { name: "Peanut Butter", quantity: 20 },
    { name: "Grain of Rice", quantity: 1 },
];
const expectedP11 = [
    { name: "Peanut Butter", quantity: 70 },
    { name: "Grain of Rice", quantity: 9001 },
    { name: "Royal Jelly", quantity: 20 },
];

const newInv2 = [];
const currInv2 = [{ name: "Peanut Butter", quantity: 20 }];
const expectedP12 = [{ name: "Peanut Butter", quantity: 20 }];

const newInv3 = [{ name: "Peanut Butter", quantity: 20 }];
const currInv3 = [];
const expectedP13 = [{ name: "Peanut Butter", quantity: 20 }];

function updateInventory(newInv = [], currInv = []) {
    for (let i = 0; i < newInv.length; i++) {
        let itemFound = false;
        const newItem = newInv[i];

        for (let j = 0; j < currInv.length; ++j) {
            const currItem = currInv[j];

            if (newItem.name === currItem.name) {
                itemFound = true;
                currItem.quantity += newItem.quantity;
                // no need to keep looping over the rest of the items since we found what we are looking for
                break;
            }
        }
        // after looking through all current inventory
        if (itemFound === false) {
            currInv.push(newItem);
        }
    }
    return currInv;
}


// --------- Problem # 2--------------------

// / 
//   Given a string that may have extra spaces at the start and the end,
//   return a new string that has the extra spaces at the start and the end trimmed (removed)
//   do not remove any other spaces.
// */

const str1 = "   hello world     ";
const expectedP2 = "hello world";

function trim(str) {
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] != ' ' || (str[i - 1] != ' ' && str[i + 1] != ' ')) {
            newStr += str[i];
        }
    }
    return newStr;
}

console.log(trim(str1))


// ------------------problem  #3 ------------------

// /* 
//   An anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
//   typically using all the original letters exactly once.
//   Is there a quick way to determine if they aren't an anagram before spending more time?
//   Given two strings
//   return whether or not they are anagrams
// */

const strA1 = "yes";
const strB1 = "eyi";
const expected1 = false;

const strA2 = "yes";
const strB2 = "eYs";
const expected2 = true;

const strA3 = "no";
const strB3 = "noo";
const expected3 = false;

const strA4 = "silent";
const strB4 = "listbn";
const expected4 = false;

function check(str1, str2) {
    var strA = str1.toLowerCase()
    var strB = str2.toLowerCase()
    if (strA.length != strB.length) {
        return false
    }

    var checker = []

    for (i = 0; i < strA.length; i++) {
        checker.push(strA[i])
        for (j = 0; j < strB.length; j++) {
            if (strB[j] == strA[i]) {
                checker.pop(strA[i])
            }
        }
        if (checker.length != 0) {
            return false
        }
    }
    return true
}

console.log(check(strA1, strB1));
console.log(check(strA2, strB2));
console.log(check(strA3, strB3));
console.log(check(strA4, strB4));
