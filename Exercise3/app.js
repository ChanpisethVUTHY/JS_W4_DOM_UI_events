const COLORS = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "black", "white", "gray"];

//
// Get a random color among the list of available colors
//
function randomColor() {
  const randomIndex = Math.floor(Math.random() * COLORS.length);
  return COLORS[randomIndex];
}

//
// Create a new card
//
function createCard() {
 
  // 1 - Random color for card
  const cardColor = randomColor();
  // 2 - Set card text
  const card = document.createElement("div");
  card.classList.add("card");
  card.style.backgroundColor= cardColor;

  const title = ["Hello","Description"];
  const randomTitleIndex = Math.floor(Math.random()*title.length);
  const randomTitle = title[randomTitleIndex];

  const creatTitle = document.createElement("p");
  creatTitle.textContent= randomTitle;
  card.appendChild(creatTitle);
  card.style.backgroundColor= cardColor;

  // 3 - Set card footer
  const cardFooter = document.createElement("div");
  cardFooter.classList.add("card-footer");

  //  4 - Manage footer button
  const removeButton = document.createElement("Button");
  removeButton.textContent="Remove Card";
  removeButton.addEventListener("click",function(){
    card.remove();
  });
  cardFooter.appendChild(removeButton);
  card.appendChild(cardFooter)

  // 5 - Add card to containers
  document.querySelector(".container").appendChild(card);
}

//--------------------------------------------------
// Code Start
//--------------------------------------------------

const btnCreate = document.querySelector('#create');
btnCreate.addEventListener('click', createCard);
