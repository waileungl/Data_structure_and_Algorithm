// -----problem 1 ---------

// * 
//   String: Rotate String
//   Create a standalone function that accepts a string and an integer,
//   and rotates the characters in the string to the right by that given
//   integer amount.
// */

// const str = "Hello World";

const rotateAmnt1 = 0;
const expected1 = "Hello World";

const rotateAmnt2 = 1;
const expected2 = "dHello Worl";

const rotateAmnt3 = 2;
const expected3 = "ldHello Wor";

const rotateAmnt4 = 4;
const expected4 = "orldHello W";

const rotateAmnt5 = 13;
const expected5 = "ldHello Wor";

function rotateString(int, str){
    if(int > str.length){
        return str
    }
    temp = ''
    for(var i = str.length - 1; i > str.length - 1 - int; i --){
        temp = str[i] + temp
    }
    rest = str.substring(0, str.length - int)
    output = temp + rest
    return output
}

// console.log(rotateString(0, str));
// console.log(rotateString(1, str));
// console.log(rotateString(2, str));
// console.log(rotateString(4, str));
// console.log(rotateString(13, str));


// ---------- Problem # 2-------------

// * 
//   Create the function isRotation(str1,str2) that
//   returns whether the second string is a rotation of the first.
// */

const strA1 = "ABCD";
const strB1 = "CDAB";
// Explanation: if you start from A in the 2nd string, the letters are in the same order, just rotated
const expected6 = true;

const strA2 = "ABCD";
const strB2 = "CDBA";
// Explanation: all same letters in 2nd string, but out of order
const expected7 = false;

const strA3 = "ABCD";
const strB3 = "BCDAB";
// Explanation: same letters in correct order but there is an extra letter.
const expected8 = false; 

function rotateString2(str1, str2){
    temp = ''
    for(var i = str1.length - 1; i > str1.length/2 - 1; i --){
        temp = str1[i] + temp
    }
    strA = temp + str1.substring(0, str1.length/2)
    if (strA == str2){  
        return true
    }
    return false
}

function rotateString3(str1, str2){

    if ((str1+str1).includes(str2)){
        return true
    }
    return false
}

console.log(rotateString3(strA1, strB1));
console.log(rotateString3(strA2, strB2));
console.log(rotateString3(strA2, strB2));


// ---------- problem # 3 ( this actually belongs to tomorrow, so don't worry if you don't touch it today !

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
const expected9 = [
    { name: "Peanut Butter", quantity: 70 },
    { name: "Grain of Rice", quantity: 9001 },
    { name: "Royal Jelly", quantity: 20 },
];

const newInv2 = [];
const currInv2 = [{ name: "Peanut Butter", quantity: 20 }];
const expected10 = [{ name: "Peanut Butter", quantity: 20 }];

const newInv3 = [{ name: "Peanut Butter", quantity: 20 }];
const currInv3 = [];
const expected11 = [{ name: "Peanut Butter", quantity: 20 }];

function newInventory(newInv, currInv){
    for(var i = 0; i < newInv.length; i++){
        for( [key, value] in Object.entries(newInv[i])){
            console.log(newInv[key], currInv[value]);
            currInv[i][value] += newInv[i][value]
            currInv[i][key] += newInv[i][key]
        }
    }
    return currInv
}

// console.log(newInventory(newInv1, currInv1));