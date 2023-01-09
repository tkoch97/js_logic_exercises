let yourNumber = prompt(`Adivinhe o número que estou pensado?! Está entre 0 e 10`);
const randomNumber = Math.round(Math.random() * 10);

let xAttempts = 1;

while (Number(yourNumber) != randomNumber) {
  yourNumber = prompt(`Não é o número que pensei, tente novamente!`);
  xAttempts++;
}

if (xAttempts == 1) {
  alert(`Parabéns, o número que pensei foi ${randomNumber}, você adivinhou em 1 tentativa.`);
} else {
  alert(`Parabéns, o número que pensei foi ${randomNumber}, você adivinhou em ${xAttempts} tentativas.`);
}