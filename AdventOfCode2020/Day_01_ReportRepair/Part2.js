/* 
The challenge is about finding the two numbers that add up to be 2020. Then multiplying them and returning the result.
Input was a text string of '\n' separated integers.

I solved this challenge by using the JS web-dev console on the input site using the commands below.
*/

let unformattedText = document.querySelector("pre").innerText;
let splitText = unformattedText.split('\n');
let result;

for (let i = 0; i < splitText.length; i++){
    for (let j = 0; j < splitText.length; j++){
        for (let k = 0; k < splitText.length; k++){
            if (j == i || j == k || i == k) continue;
                    
            let num1 = parseInt(splitText[i]);
            let num2 = parseInt(splitText[j]);
            let num3 = parseInt(splitText[k]);

            if (num1 + num2 + num3 == 2020) result = num1*num2*num3;
        }
    }
}

// Simply output 'result' and it'll tell you what the result is.