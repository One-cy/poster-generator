// define canvas properties
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
canvas.width = 662;
canvas.height = 937;
const x = canvas.width / 2;
const posY = 480
ctx.textBaseline = 'middle';
ctx.textAlign = "center";
ctx.fillStyle = "rgba(0, 54, 114, 1)"
const fontDate = "bold 54px Arial";
const fontTime = "bold 34px Arial";
const fontCity = "bold 40px Arial ";
const fontAlt = "bold 25px Arial";

function drawCanvas1() {
  // get canvas
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");

  var img = document.getElementById("bg-img");
  ctx.drawImage(img, 0, 0);

  // get inputs values
  var myDate = document.getElementById("date").value.trim();
  var myTime = document.getElementById("time").value.trim();
  var myCity = document.getElementById("city").value.trim();
  var myAddressName = document.getElementById("address-name").value.trim();
  var myAddress = document.getElementById("address").value.trim();

  // fill canvas
  // ctx.fillText(myDate, getTextWidth(myDate), 450)
  ctx.font = fontDate;
  ctx.fillText(myDate, x, posY);
  ctx.font = fontTime;
  ctx.fillText(myTime, x, posY + 50);
  ctx.font = fontCity;
  ctx.fillText(myCity, x, posY + 140);
  ctx.font = fontAlt;
  ctx.fillText(myAddressName, x, posY + 180);
  ctx.fillText(myAddress, x, posY + 210);
}

export {
  drawCanvas1
};