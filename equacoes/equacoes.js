alert (`Resultado final: ${sum(numberOne, numberTwo)}`);

const sum = function (number1, number2){
  return number1 + number2;
}

const subtraction = function (number1, number2){
  return number1 - number2;
}

const multiply = function (number1, number2){
  return number1 * number2;
}

const division = function (number1, number2){
  return number1 / number2;
}

const restOfDivision = function (number1, number2){
  return number1 % number2;
}


alert ("Me fala dois números para eu fazer os cálculos, aperte em OK para prosseguir.");
let firstNumber = prompt ("Digite o primeiro número:");
let secondNumber = prompt ("Digite o segundo número:");

firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

alert(`Resultado da soma: ${sum(firstNumber,secondNumber)}`);
alert(`Resultado da subtração: ${subtraction(firstNumber,secondNumber)}`);
alert(`Resultado da multiplicação: ${multiply(firstNumber,secondNumber)}`);
alert(`Resultado da divisão: ${division(firstNumber,secondNumber)}`);
alert(`Resultado do resto da divisão: ${restOfDivision(firstNumber,secondNumber)}`);