const box = document.getElementsByClassName("box");
const input = document.getElementsByClassName("input");

const btn = document.getElementById("btn");

// console.log(input);
function colorButton() {
    for (let i = 0; i<input.length; i++) {
        box[i].style.backgroundColor = input[i].value;
    }
}