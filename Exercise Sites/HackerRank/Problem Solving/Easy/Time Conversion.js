'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    // Split incoming string into parts that were divided by ':'.
    const sample = s.split(':');
    // Get AM / PM value from 'seconds' part of sample.
    const ampm = sample[2].split('').splice(2, 2).join('');
    // Make seconds separate (remove AM/PM part)
    const seconds = sample[2].split('').splice(0,2).join('');

    const hNum = parseInt(sample[0]); // Converting hours to integer
    let hours;
    if (ampm === "AM") {
        hours = (hNum < 10) ?  `0${hNum}` : (hNum === 12) ? "00" : ":)";
    } else {
        hours = (hNum === 12) ? hNum : hNum + 12;
    }

    return `${hours}:${sample[1]}:${seconds}`;

}

console.log(timeConversion("06:40:03AM"));

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}
