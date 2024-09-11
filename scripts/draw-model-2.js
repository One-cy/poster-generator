// define canvas properties
const canvas2 = document.getElementById("canvas-2");
const ctx2 = canvas2.getContext("2d");
canvas2.width = 662;
canvas2.height = 937;
const x2 = canvas2.width / 2;
const posY2 = 650
ctx2.textBaseline = 'middle';
ctx2.textAlign = "center";
ctx2.fillStyle = "rgba(0, 54, 114, 1)"
const fontDate2 = "bold 42px Arial";
const fontTime2 = "bold 28px Arial";
const fontCity2 = "bold 32px Arial ";
const fontAlt2 = "bold 20px Arial";

// gets the width of a string on the canvas2
// function getTextWidth(theText) {
//   var textWidthCity = ctx2.measureText(theText).width;
//   return (canvas2.width / 2) - (textWidthCity / 2);
// }

function drawCanvas2() {
  // get canvas
  var c = document.getElementById("canvas-2");
  var ctx2 = c.getContext("2d");

  var img = document.getElementById("bg-model-2");
  ctx2.drawImage(img, 0, 0);

  // get inputs values
  var myDate = document.getElementById("date").value.trim();
  var myTime = document.getElementById("time").value.trim();
  var myCity = document.getElementById("city").value.trim();
  var myAddressName = document.getElementById("address-name").value.trim();
  var myAddress = document.getElementById("address").value.trim();

  // fill canvas2
  // ctx2.fillText(myDate, getTextWidth(myDate), 450)
  ctx2.font = fontDate2;
  ctx2.fillText(myDate, x2, posY2);
  ctx2.font = fontTime2;
  ctx2.fillText(myTime, x2, posY2 + 50);
  ctx2.font = fontCity2;
  ctx2.fillText(myCity, x2, posY2 + 120);
  ctx2.font = fontAlt2;
  ctx2.fillText(myAddressName, x2, posY2 + 150);
  ctx2.fillText(myAddress, x2, posY2 + 170);
}
export {
  drawCanvas2
};