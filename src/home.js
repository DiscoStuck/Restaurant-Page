//Initialize home
const home = document.createElement("div");
home.className = "home";

//Description content
const descriptionContent =
  "A cozy and inviting ramen restaurant located in the heart of Da Nang. Our menu features a variety of authentic Japanese ramen dishes, each carefully crafted with the freshest ingredients and traditional cooking techniques. Whether you're in the mood for a rich and savory tonkotsu broth or a spicy and aromatic miso broth, we have something to satisfy every taste. Our friendly and attentive staff is here to ensure that your visit is truly memorable. So come on in and join us for a delicious bowl of comforting and satisfying ramen at HOME.";

function getElements() {
  const building = document.createElement("img");
  building.className = "building";
  building.src = "./images/building.png";
  const description = document.createElement("div");
  description.className = "description";
  const welcome = document.createElement("h3");
  welcome.innerHTML = "Welcome <span>to </span>HOME";
  const para = document.createElement("p");
  para.innerHTML = descriptionContent;

  return {
    building: building,
    description: description,
    welcome: welcome,
    para: para,
  };
}

function clearMainDiv() {
  home.innerHTML = "";
}

function addMainDiv() {
  const tab = document.querySelector(".tab");
  tab.appendChild(home);
}

function addDescription() {
  const elements = getElements();
  elements.description.appendChild(elements.welcome);
  elements.description.appendChild(elements.para);
  home.appendChild(elements.building);
  home.appendChild(elements.description);
}

function populate() {
  clearMainDiv();
  addMainDiv();
  addDescription();
}

export { populate };
