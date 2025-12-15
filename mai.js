const inputDisplay = document.getElementById("InputDisplay");
const outputDisplay = document.getElementById("outputDisplay");

function appendtoDisplay(input) {
    inputDisplay.value += input;
}

function clearDisplay() {
    inputDisplay.value = inputDisplay.value.slice(0, -1);

}

function allclearDisplay() {
    inputDisplay.value ="";
}

function calculate() {

}