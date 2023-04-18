const socks = [1, 2, 2, 1, 1, 3, 5, 1, 4, 4]

//
const sockPair = socks => {
    let map = new Object()
    for(const sock of socks){
        map[sock]? map[sock] ++ : map[sock] = 1
    }
    return Object.entries(map).filter((item)=> item[1]%2 === 0).reduce((acc, curr) => (acc + curr[1]), 0)/2
}

console.log(sockPair(socks)) 