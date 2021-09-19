const inputCalculator = document.querySelector('.account'),
    resultCalculator = document.querySelector('.result');

function input(i) {
    inputCalculator.value = inputCalculator.value + i
}

function result() {
    if (eval(inputCalculator.value) === undefined) {
        resultCalculator.value = '0,00';
        inputCalculator.value = '0,00';
    }
    if (eval(inputCalculator.value) === Infinity){
        resultCalculator.value = '0,00';
        inputCalculator.value = 'Dividing by zero is not allowed';
    }
    resultCalculator.value = eval(inputCalculator.value);
    inputCalculator.value = eval(inputCalculator.value);
}

function backspace() {
    inputCalculator.value = inputCalculator.value.substring(0, inputCalculator.value.length-1)
}

function reset() {
    resultCalculator.value = '';
    inputCalculator.value = '';
}