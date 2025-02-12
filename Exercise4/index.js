// SECRET CODE  ---------------------------------------------------------
const SECRET_CODE = 2359;
let attemptLeft = 3;

// DOMS ELEMENTS  ---------------------------------------------------------
const passwordView = document.getElementById("passwordView");
const lostView = document.getElementById("lostView");
const wonView = document.getElementById("wonView");

const checkButton = document.getElementById("checkButton");
checkButton.addEventListener("click", handleCheck);

const tryAgainButton = document.getElementById("tryAgainButton");
tryAgainButton.addEventListener("click", showGame);

const passwordInput = document.getElementById("passwordInput");
passwordInput.addEventListener("keypress", handleEnterPassword);

const instructionLabel = document.getElementById("instructionLabel");
// Hide a given element
function hide(element) {
  element.style.display = "none";
}

// Show a given element
function show(element) {
  element.style.display = "block";
}

function showGame() {
  attemptLeft = 3;
  passwordInput.value ="";
  instructionLabel.textContent="Enter your code(You can try 3 time only!";
  hide(lostView);
  hide(wonView);
  show(passwordView);
}

function showWin() {
  // You can use this function to dispaly the Win View
  hide(passwordView);
  show(wonView);

}
function showLost() {
    // You can use this function to dispaly the Lost View
  hide(passwordView);
  show(lostView);
}

function handleCheck() {
  // Manage your logic when the button is pressed
  const passwordEnter =Number(passwordInput.value);
  if (passwordEnter === SECRET_CODE) {
      showWin();
  }else{
    attemptLeft--;
    instructionLabel.textContent=`Incorrect! You have ${attemptLeft} attemps Left.`;
    if(attemptLeft === 0){
      showLost();
    } 
  }
}
function handleEnterPassword(event){
  if(event.key === "Enter"){
    handleCheck();
  }
}
showGame();
// MAIN   ---------------------------------------------------------
