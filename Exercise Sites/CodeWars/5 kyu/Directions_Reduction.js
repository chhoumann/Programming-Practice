const opposites = {
    NORTH: "SOUTH", SOUTH: "NORTH",
    EAST: "WEST", WEST: "EAST"
};

const removeOpposites = (arr) => {
    arr.forEach((dir, i) => {
        if (opposites[dir] === arr[i+1] && i != arr.length - 1) {
            arr.splice(i, 2);
        }
    })
}

function dirReduc(arr){
    for(let i=0;i<3;i++) removeOpposites(arr);
    return arr;
}
