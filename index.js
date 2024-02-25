let incBtn = document.getElementById("num-inc");
let saveBtn = document.getElementById("entry");
let totalBtn = document.getElementById("total");

let count = 0;
let entries = [];

function increase() {
  count += 1;
  incBtn.textContent = count;
}

function save() {
  let entStr = count + " - ";
  saveBtn.textContent += entStr;
  entries.push(count);
  incBtn.textContent = 0;
  count = 0;
}

function total() {
  let sum = entries.reduce((total, entry) => total + entry, 0);
  totalBtn.textContent = "Total Entries: " + sum;
}
