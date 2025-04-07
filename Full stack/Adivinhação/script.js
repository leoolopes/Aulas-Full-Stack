const secretNumber = Math.floor(Math.random() * 100);
const input = document.getElementById("guessInput");
const feedback = document.getElementById("feedback");
const container = document.getElementById("container");

function checkGuess() {
  const guess = Number(input.value);

  if (isNaN(guess) || guess < 0 || guess > 99) {
    feedback.textContent = "Por favor, insira um número válido entre 0 e 99.";
    return;
  }

  const correct = guess === secretNumber;
  container.style.backgroundColor = correct ? "lightgreen" : "red";
  feedback.textContent = correct
    ? "Parabéns! Você acertou o número!"
    : `Tente um número ${guess > secretNumber ? "menor" : "maior"}.`;
}