// // // //
function findObjectsFilter(search, items) {
    const searchKeys = Object.keys(search);

    return items.filter(item => {
        for (const key of searchKeys) {
            if (item[key] !== search[key]) {
                return false;
            }
        }
        return true;
    })
}

const items = [
    { firstName: "Bob", lastName: "Bobbert", age: 31 },
    { firstName: "Bob", lastName: "Roberts", age: 20 },
    { firstName: "Bob", lastName: "Bill", age: 27 },
    { firstName: "Bob", lastName: "Smith", age: 31 }
]

const SearchFor = {
    firstName: "Bob",
    age: 31
}

console.log(findObjectsFilter(SearchFor, items))