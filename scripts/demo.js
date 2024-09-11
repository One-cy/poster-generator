import { drawCanvas1 } from "./draw-model-1.js";
import { drawCanvas2 } from "./draw-model-2.js";

// gets the width of a string on the canvas
function getTextWidth(theText) {
  var textWidthCity = ctx.measureText(theText).width;
  return (canvas.width / 2) - (textWidthCity / 2);
}

// function initializeImage() {
//   var c = document.getElementById("myCanvas");
//   var ctx = c.getContext("2d");

//   var img = document.getElementById("bg-img");
//   ctx.drawImage(img, 0, 0);
// }

// gets the width of a string on the canvas2
// function getTextWidth(theText) {
//   var textWidthCity = ctx2.measureText(theText).width;
//   return (canvas2.width / 2) - (textWidthCity / 2);
// }

function updateCountDate() {
  var v = document.getElementById("date").value;
  document.getElementById("countDate").innerHTML = v.length + "/32";
}
function updateCountTime() {
  var v = document.getElementById("time").value;
  document.getElementById("countTime").innerHTML = v.length + "/32";
}
function updateCountCity() {
  var v = document.getElementById("city").value;
  document.getElementById("countCity").innerHTML = v.length + "/40";
}
function updateCountAddressName() {
  var v = document.getElementById("address-name").value;
  document.getElementById("countAddressName").innerHTML = v.length + "/40";
}
function updateCountaddress() {
  var v = document.getElementById("address").value;
  document.getElementById("countAddress").innerHTML = v.length + "/40";
}

// launched when page is loaded

const drawAll = () => {
  drawCanvas1();
  drawCanvas2();
}

export {
  drawAll,
  updateCountDate,
  updateCountTime,
  updateCountCity,
  updateCountAddressName,
  updateCountaddress,
};
