"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline_1 = require("readline");
var rl = (0, readline_1.createInterface)({
    input: process.stdin,
    output: process.stdout
});
function input(questionText) {
    return new Promise(function (resolve) {
        rl.question(questionText, function (answer) {
            resolve(answer);
        });
    });
}
exports.default = input;
