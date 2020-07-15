const threes = rolls => {
    let counts = {};
    rolls.forEach(x => counts[x] = (counts[x] || 0) + 1);
    return Object.keys(counts).filter(c => counts[c] >= 3)[0];
}

const singles = (n, rolls) => {
    let single, score = 0;
    while(single != -1) {
        single = rolls.indexOf(n);
        if (single != -1) {
            score += n == 1 ? 100 : 50;
            rolls.splice(single, 1);
        }
    }
    return score;
}

function score( dice ) {
    let score = 0;
    const threeOf = threes(dice);
    if (threeOf) {
        threeOf == 1 ? score += 1000 : score += threeOf * 100;
        for (let i = 0; i < 3; i++) { dice.splice(dice.findIndex(x => x == threeOf), 1) };
    }
    score += singles(1, dice);
    score += singles(5, dice);

    return score;
}
