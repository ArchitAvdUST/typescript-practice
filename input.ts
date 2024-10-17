import {createInterface} from "readline";

const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

function input(questionText: string) : Promise<string>{
    return new Promise((resolve) => {
     rl.question(questionText, (answer) => {
        resolve(answer);
    });
});
}    

export default input;