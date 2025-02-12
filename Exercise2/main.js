 

// Generate a random hexadecimal color
function getRandomHexColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


// When clicking on the RANDOM COLOR button:
// -	Generate a random color
// -	Set the body background color with this color
// -	Set the color label with the value of this color
const body = document.querySelector("body");
const resultColorText = document.getElementById("result-color");
const btn = document.querySelector("button");
btn.addEventListener("click",()=>{
    body.style.backgroundColor = getRandomHexColor();
    resultColorText.textContent = getRandomHexColor();
})

