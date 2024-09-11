console.log("here in main.js file");
import * as test from "./scripts/demo.js";
import * as dl from "./scripts/helper-download.js";

test.drawAll;
test.updateCountDate;
test.updateCountTime;
test.updateCountCity;
test.updateCountAddressName;
test.updateCountaddress;

const btnGenerate = document.querySelector('#btn-1');
btnGenerate.addEventListener('click', test.drawAll)

const model1 = document.querySelector('#dl-model-1');
const model2 = document.querySelector('#dl-model-2');
const canvas1 = document.querySelector('#dl-canvas-1');
const canvas2 = document.querySelector('#dl-canvas-2');
model1.addEventListener('click', dl.downloadSource);
model2.addEventListener('click', (value) => {
  console.log("click model2", value.currentTarget.value);
  dl.downloadModel(value.currentTarget.value)
}
);
canvas1.addEventListener('click', dl.downloadCanvas);
canvas2.addEventListener('click', dl.downloadCanvas2);
