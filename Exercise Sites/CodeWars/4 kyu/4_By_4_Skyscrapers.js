// Not finished.

// Requirements:
    // Height is between 1-4
    // Height can only be 1-4 in a given row - column, no duplicates
    // Clue = amount of skyscrapers visible from the outside
    // Higher skyscrapers block the view of lower skyscrapers
// My notes:
    // 4's are guaranteed to be next to '1' clues.
    // Skyscrapers do not have to be visible 'sequentially' - just throughout the whole column/row

function getClues(clues) {
    let clArr = [new Array(), new Array(), new Array(), new Array()]
    clues.forEach((c,i) => {
        // Top clues:
        if (i < 4) { clArr[0].push(c) }
        // Right clues:
        if (i >= 4 && i < 8)  { clArr[1].push(c) }
        // Bottom clues:
        if (i >= 8 && i < 12 ) { clArr[2].push(c) }
        // Left clues:
        if (i >= 12) { clArr[3].push(c) }
    })
    clArr[2].reverse(); clArr[3].reverse();
    return clArr;
}

function printSkyScrapers(clues, solution) {
    const clArr = getClues(clues);
    
    console.log(`     ${clArr[0].join(' ')}    `);
    for(let i = 0; i < 4; i++) {
        console.log(` ${clArr[3][i]} | ${solution[i].join(' ')} | ${clArr[1][i]} `)
    }
    console.log(`     ${clArr[2].join(' ')}   `);
}


function solvePuzzle (clues) {
    let solution = [[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0],[0, 0, 0, 0]];
    const formClues = getClues(clues);
    

    
    printSkyScrapers(clues, solution);
    return solution;
}


const clues = [2, 2, 1, 3,
               2, 2, 3, 1,
               1, 2, 2, 3,
               3, 2, 1, 3];

solvePuzzle(clues);