let max;
let num;
let spinning = false;

document.getElementById("startBtn").addEventListener("click", () => {
  max = parseInt(document.getElementById("maxInput").value);
  if (isNaN(max) || max <= 0) {
    alert("Please enter a valid number greater than 0.");
    return;
  }
  num = Math.floor(Math.random() * max) + 1;
  alert("Game started! Click the wheel to spin.");
});

document.getElementById("spinBtn").addEventListener("click", () => {
  if (spinning || !max) return;

  spinning = true;
  let wheel = document.getElementById("wheel");
  let rotateValue = 3600 + Math.floor(Math.random() * 360);
  wheel.style.transition = "transform 10s ease-out";
  wheel.style.transform = `rotate(${rotateValue}deg)`;

  setTimeout(() => {
    document.getElementById("resultText").innerHTML = `
      🎉 Congrats! You got: ${num}<br><br>
      <button onclick="tryAgain()">Try Again</button>
      <button onclick="exitGame()">Exit</button>
    `;
    document.getElementById("resultPopup").style.display = "flex";
    spinning = false;
  }, 3000);  // Reduced from 10000 to 3000 (3 seconds)
  
});
function tryAgain() {
    document.getElementById("resultPopup").style.display = "none";
  }
  
  function exitGame() {
    alert("Thanks for playing!");
    window.location.reload(); // Reloads the game
  }
  