import * as home from "./home.js";
import * as menu from "./menu.js";
import * as contact from "./contact.js";

const content = document.querySelector("#content");
const header = document.createElement("div");
const headerMenu = document.createElement("h2");
const headerHome = document.createElement("h1");
const headerContact = document.createElement("h2");
const tab = document.createElement("div");
const bg = document.createElement("div");
const bgOverlay = document.createElement("div");

function defineClasses() {
  header.id = "header";
  tab.className = "tab";
  bg.className = "bg";
  bgOverlay.className = "bgOverlay";
}

function fillHeaders() {
  headerMenu.innerHTML = "menu";
  headerHome.innerHTML = "HOME";
  headerContact.innerHTML = "contact";
}

function addBg() {
  tab.appendChild(bg);
  tab.appendChild(bgOverlay);
}

function cleanTab() {
  tab.innerHTML = "";
  addBg();
}

function populate() {
  defineClasses();
  fillHeaders();
  header.appendChild(headerMenu);
  header.appendChild(headerHome);
  header.appendChild(headerContact);
  content.appendChild(header);
  addBg();
  content.appendChild(tab);

  home.populate();
}

function createListener() {
  headerMenu.addEventListener("click", function () {
    cleanTab();
    menu.populate();
  });
  headerHome.addEventListener("click", function () {
    cleanTab();
    home.populate();
  });
  headerContact.addEventListener("click", function () {
    cleanTab();
    contact.populate();
  });
}

export { populate, createListener };
