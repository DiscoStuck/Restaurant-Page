//Initialize contact
const contact = document.createElement("div");
contact.className = "contact";

function getElements() {
  const mapDiv = document.createElement("div");
  mapDiv.className = "mapDiv";
  const p = document.createElement("p");
  p.innerHTML =
    "Telephone: +84 123 4567876<span>Main Road, Son Tra, Da Nang, Vietnam</span>";
  const mapImage = document.createElement("img");
  mapImage.className = "mapImage";
  mapImage.src = "./images/map.png";

  return {
    mapDiv: mapDiv,
    p: p,
    mapImage: mapImage,
  };
}

function addMainDiv() {
  const tab = document.querySelector(".tab");
  tab.appendChild(contact);
}

function clearMainDiv() {
  contact.innerHTML = "";
}

function addMap() {
  const elements = getElements();
  elements.mapDiv.appendChild(elements.p);
  elements.mapDiv.appendChild(elements.mapImage);
  contact.appendChild(elements.mapDiv);
}

function populate() {
  clearMainDiv();
  addMainDiv();
  addMap();
}

export { populate };
