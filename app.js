let count = 0;
let countEl = document.getElementById("count");
let saveEl = document.getElementById("save");

function increment() {
  count += 1;
  countEl.innerHTML = count;
}

function save() {
  let entries = " " + count + " - ";
  saveEl.innerHTML += entries;
  countEl.innerHTML -= count;
  count = 0;
}


