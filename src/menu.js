// Initialize menu
const menu = document.createElement("div");
menu.className = "menu";

// Dish descriptions
const paraTonkotsu =
  "Rich, creamy broth made from boiled pork bones. Served with thin noodles and toppings like sliced pork, green onions, and a soft-boiled egg.";
const paraMiso =
  "Broth made from miso paste and chicken or pork stock. Served with curly noodles and toppings like sliced pork, corn, and green onions. Savory, slightly sweet flavor.";
const paraShio =
  "Light broth with thin noodles and toppings like sliced pork and green onions. Made with chicken, vegetables, and seaweed. Slightly salty flavor.";

function getElements() {
  const dishImage = document.createElement("img");
  dishImage.className = "dishImage";
  const dish = document.createElement("div");
  dish.className = "dish";
  return {
    dish: dish,
    dishImage: dishImage,
    h3: document.createElement("h3"),
    para: document.createElement("p"),
  };
}

function clearMainDiv() {
  menu.innerHTML = "";
}

function addMainDiv() {
  const tab = document.querySelector(".tab");
  tab.appendChild(menu);
}

function addDish(dish) {
  const elements = getElements();
  elements.dishImage.src = `./images/${dish}.png`;
  elements.h3.innerHTML = dish.charAt(0).toUpperCase() + dish.slice(1);
  if (dish === "tonkotsu") elements.para.innerHTML = paraTonkotsu;
  else if (dish === "miso") elements.para.innerHTML = paraMiso;
  else if (dish === "shio") elements.para.innerHTML = paraShio;
  elements.dish.appendChild(elements.dishImage);
  elements.dish.appendChild(elements.h3);
  elements.dish.appendChild(elements.para);

  menu.appendChild(elements.dish);
}
function populate() {
  clearMainDiv();
  addMainDiv();
  addDish("tonkotsu");
  addDish("miso");
  addDish("shio");
}

export { populate };
