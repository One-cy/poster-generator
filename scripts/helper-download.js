// name a file as 'affiche-[city]-[date]'
function getFileName() {
  var myDate = document.getElementById("date").value.replaceAll(" ", "-");
  var myCity = document.getElementById("city").value;
  var filename = "affiche-" + myCity + "-" + myDate
  filename = filename + ".png"
  return filename
}

function downloadSource() {
  var link = document.createElement("a");
  // link.href = "./resources/poster-models/model-1.png"
  link.href = "./resources/poster-models/model-1.png"
  link.download = "model-1.png"
  link.click();
}

function downloadModel(value) {
  var link = document.createElement("a");
  link.href = "./resources/poster-models/"+value+".png"
  link.download = "model-2.png"
  link.click();
}

function downloadCanvas() {
  var c = document.getElementById("myCanvas");
  var link = document.createElement("a");
  link.href = c.toDataURL("image/png");
  link.download = getFileName()
  link.click();

  // var link = document.createElement('a');
  // link.download = 'filename.png';
  // // link.href = document.getElementById('myCanvas').toDataURL()
  // link.href = document.getElementById("bg-img").toDataURL()
  // link.click();
}

function downloadCanvas2() {
  var c = document.getElementById("canvas-2");
  var link = document.createElement("a");
  link.href = c.toDataURL("image/png");
  link.download = getFileName()
  link.click();
}

export {
  downloadSource,
  downloadModel, 
  downloadCanvas,
  downloadCanvas2
};