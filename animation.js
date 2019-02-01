const choices = ["ROCK", "PAPER", "SCISSORS"];


const userChoices = document.querySelectorAll('.choice');

userChoices.forEach(choice => choice.addEventListener('click', logChoice));


function logChoice() {

  var userScore = document.getElementById('yourScore').textContent;
  var userIntScore = parseInt(userScore, 10);


  var compScore = document.getElementById('compScore').textContent;
  var compIntScore = parseInt(compScore, 10);

  var userAnswer = this.textContent;
  var compAnswer = choices[Math.floor(Math.random()*choices.length)];



  if (userAnswer === "PAPER") {
    if (compAnswer === "ROCK") {
      var userIntScore = userIntScore + 1;
      document.getElementById('yourScore').textContent = userIntScore;
      document.getElementById('changeText').textContent = "YOU chose PAPER. COMPUTER chose ROCK. YOU win! Press a button to play again.";
      } else if (compAnswer === "SCISSORS") {
          var compIntScore = compIntScore + 1;
          document.getElementById('compScore').textContent = compIntScore;
          document.getElementById('changeText').textContent = "YOU chose PAPER. COMPUTER chose SCISSORS. COMPUTER wins! Press a button to play again.";
      } else {
          document.getElementById('changeText').textContent = "YOU both chose PAPER. It\'s a tie! Please try again.";
      }
    } else if (userAnswer === "ROCK") {
      if (compAnswer === "SCISSORS") {
        var userIntScore = userIntScore + 1;
        document.getElementById('yourScore').textContent = userIntScore;
        document.getElementById('changeText').textContent = "YOU chose ROCK. COMPUTER chose SCISSORS. YOU win! Press a button to play again.";
      } else if (compAnswer === "PAPER") {
          var compIntScore = compIntScore + 1;
          document.getElementById('compScore').textContent = compIntScore;
          document.getElementById('changeText').textContent = "YOU chose ROCK. COMPUTER chose PAPER. COMPUTER wins! Press a button to play again.";
        } else {
            document.getElementById('changeText').textContent = "YOU both chose ROCK. It\'s a tie! Please try again.";
        }
      } else if (userAnswer === "SCISSORS") {
        if (compAnswer === "PAPER") {
          var userIntScore = userIntScore + 1;
          document.getElementById('yourScore').textContent = userIntScore;
          document.getElementById('changeText').textContent = "YOU chose SCISSORS. COMPUTER chose PAPER. YOU win! Press a button to play again.";
        } else if (compAnswer === "ROCK") {
            var compIntScore = compIntScore + 1;
            document.getElementById('compScore').textContent = compIntScore;
            document.getElementById('changeText').textContent = "YOU chose SCISSORS. COMPUTER chose ROCK. COMPUTER wins! Press a button to play again.";
          } else {
              document.getElementById('changeText').textContent = "YOU both chose SCISSORS. It\'s a tie! Please try again.";
          }
        }
  }



  if (compIntScore === 5) {
    document.getElementById('choices').style.display = "none";
    document.getElementById('changeTextBox').style.display = "none";
    document.getElementById('winnerText').textContent = "COMPUTER has won! Refresh to play again.";
  } else {
    document.getElementById('choices').style.display = "none";
    document.getElementById('changeTextBox').style.display = "none";
    document.getElementById('winnerText').textContent = "You won! Refresh to play again.";
  }
