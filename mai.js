const upperScreen = document.getElementById("upperScreen");
const lowerScreen = document.getElementById("lowerScreen");
const mainOps = document.querySelectorAll("#mainOp");

let numA ="";
let numB ="";
let operator="";

function appendtoDisplay(input) {
    lowerScreen.value += input;
    

    if (!operator) {
        upperScreen.value = lowerScreen.value;
        numA = lowerScreen.value;

    } else {
        numB = lowerScreen.value;
        upperScreen.value = `${numA}${operator}${numB}`;
    }
}

mainOps.forEach(button => button.addEventListener('click', () => {
    if (!lowerScreen.value) return;

    operator = button.textContent;
    lowerScreen.value ="";
    upperScreen.value = `${numA} ${operator}`;

}))

function clearDisplay() {
    lowerScreen.value = lowerScreen.value.slice(0, -1);
    upperScreen.value = upperScreen.value.slice(0, -1);

}

function allclearDisplay() {
    operator ="";
    lowerScreen.value ="";
    upperScreen.value ="";
    numA ="";
    numB ="";
}

function getPercentage() {
    lowerScreen.value = Number(lowerScreen.value)/100;
    upperScreen.value = lowerScreen.value;
    numA = lowerScreen.value;

}

function getPositiveNegative() {

}

function calculate() {
    let result ="";
    switch(operator) {
        case '+':
            result = Number(numA) + Number(numB)
            break;
        case '-':
            result = Number(numA) - Number(numB)
            break;
        case 'x':
            result = Number(numA)*Number(numB)
            break;
        case '/':
            result = Number(numA) / Number(numB)
            break;
    }

    numA = result;
    numB="";
    lowerScreen.value = result;
    
}

