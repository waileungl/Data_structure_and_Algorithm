// ---------- problem # 1---------------------------------

// /* 
//   Given an array of objects / dictionaries to represent new inventory,
//   and an array of objects / dictionaries to represent current inventory,
//   update the quantities of the current inventory

//   if the item doesn't exist in current inventory, add it to the inventory
//   return the current inventory after updating it.
// */


const newInv2 = [];
const currInv2 = [{ name: "Peanut Butter", quantity: 20 }];
const expectedP12 = [{ name: "Peanut Butter", quantity: 20 }];

const newInv3 = [{ name: "Peanut Butter", quantity: 20 }];
const currInv3 = [];
const expectedP13 = [{ name: "Peanut Butter", quantity: 20 }];

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


function convert(Inv){
    dict = {};
    for(var i = 0; i < Inv.length; i++){
        values = Object.values(Inv[i])
        dict[values[0]] = values[1]
    }
    return dict
}

function convertBack(Inv){
    arr = [];
    keys = Object.keys(Inv)
    values = Object.values(Inv)
    for(var i = 0; i < keys.length; i++){
        dict = {};
        dict['name'] = keys[i]
        dict['quantity'] = values[i]
        arr.push(dict)
    }
    return arr
}



function combine(newInv, currInv){
    if(newInv.length == 0){
        return currInv
    }
    Inv2 = convert(newInv)
    Inv1 = convert(currInv)
    key1 = Object.keys(Inv2)
    key2 = Object.keys(Inv1)
    for(i = 0; i < key2.length; i++){
        if(key1.includes(key2[i])){
            Inv2[key2[i]] += Inv1[key1[i]]
        }else(
            Inv2[key1[i]] = Inv1[key1[i]]
        )
    }
    return convertBack(Inv2)
}

console.log(combine(newInv1, currInv1));
console.log(combine(newInv2, currInv2));
console.log(combine(newInv3, currInv3));