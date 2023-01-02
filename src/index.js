import "./style.css";
import "./index.html";
import "./menu.js";
import * as base from "./base.js";

// Load images
const imageContext = require.context(
  "./images",
  false,
  /\.(png|jpg|jpeg|gif)$/
);

const imageKeys = imageContext.keys();
const images = imageKeys.map(imageContext);

base.populate();
base.createListener();
