let words = [];
let currentIndex = 0;

async function loadWords() {
  const response = await fetch("words.json");
  words = await response.json();
  nextWord();
}

function nextWord() {
  document.getElementById("feedback").textContent = "";
  document.getElementById("user-input").value = "";
  currentIndex = Math.floor(Math.random() * words.length);
  document.getElementById("spanish-word").textContent = words[currentIndex].spanish;
}

function checkAnswer() {
  const userInput = document.getElementById("user-input").value.trim().toLowerCase();
  const correctAnswer = words[currentIndex].english.toLowerCase();
  const feedback = document.getElementById("feedback");

  if (userInput === correctAnswer) {
    feedback.textContent = "Richtig!";
    feedback.style.color = "green";
  } else {
    feedback.textContent = `Falsch! Richtig wäre: ${correctAnswer}`;
    feedback.style.color = "red";
  }
}

loadWords();
