// =-------------problem 1---------------------

// The height map of an area in represented an 2 dimensional array. 

// If rain pours in one point in the map to untill it fills everywhere to 
// a height value, 
// which parts of the map will go under water?



// Solution:
// Make a 2d array for showing the points that has gone under water.

// Then use a recursive algorithm to fill the 2d array. For example:
// If the height value is less than a point's height:
//     put '-' in the array's element. 
// If the height value is higher than a point's height:
//     put 'X' in the element

land = [
    [3, 5, 6, 7, 2],
    [2, 3, 7, 9, 8],
    [4, 2, 1, 3, 9],
    [3, 2, 6, 2, 6],
    [9, 8, 7, 5, 3]
    ]


function collectRainOneWay(land, water_level, x, y){
    land[x][y] = "-"
    console.log(land);
    if (x == 0 || y == 0 || land[x-1][y] > water_level && land[x+1][y] > water_level && land[x][y-1] > water_level && land[x][y+1] > water_level) return land
    else{
        if(land[x-1][y] < water_level) return collectRain(land, water_level, x-1, y)
        if(land[x+1][y] < water_level) return collectRain(land, water_level, x+1, y)
        if(land[x][y+1] < water_level) return collectRain(land, water_level, x, y+1)
        if(land[x][y-1] < water_level) return collectRain(land, water_level, x, y-1)
    }
}

function checker(land, water_level){
    
}


console.log(collectRain(land, 5, 3, 2));