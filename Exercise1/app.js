let container1 = document.getElementById("container1");
let container2 = document.getElementById("container2");
let container3 = document.getElementById("container3");

//  1- Move the item 3 to the second container
let item3 = container1.querySelector(".item:nth-child(3)");
if(item3){
  container2.appendChild(item3);
}

//  2- Remove item 4
let item4 = container2.querySelector(".item:first-child");
if(item4){
  item4.remove();
}

// 3- Create a new item 10 and add it to container 3
let item10 = document.createElement("div");
item10.classList.add("item");
item10.textContent ="10";
container3.appendChild(item10);


//  4- Set all items located in a blue container to red
document.querySelectorAll(".containerBlue .item").forEach(item =>{
  item.style.color ="red";
})
