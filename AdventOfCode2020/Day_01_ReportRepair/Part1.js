/* 
The challenge is about finding the two numbers that add up to be 2020. Then multiplying them and returning the result.
Input was a text string of '\n' separated integers.

I solved this challenge by using the JS web-dev console on the input site using the commands below.
*/

let unformattedText = document.querySelector("pre").innerText;
let splitText = unformattedText.split('\n');
let result;

for (let i = 0; i < splitText.length; i++){
    for (let j = splitText.length - 1; j >= 0; j--){
        if (j == i) continue;
                
        let num1 = parseInt(splitText[i]);
        let num2 = parseInt(splitText[j]);

        if (num1 + num2 == 2020) result = num1*num2;
    }
}

// Simply output 'result' and it'll tell you what the result is.