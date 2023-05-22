// List of color values
const COLOR_VALUES = [
  "#59D2FE", // BLUE
  "#75E4B3", // GREEN
  "#FFDF9F", // YELLOW
  "#FF9879", // RED
  "#F1C8DB", // PINK
];

// Tracks selected color
let selectedColor = 0;

function changeColor(colorIndex) {
  selectedColor = colorIndex;
  generateColorSelector(colorIndex);
}

function generateColorSelector(selected) {
  let html = "";

  for (let i in COLOR_VALUES) {
    const color = COLOR_VALUES[i];
    if (selected == i) {
      html += `<div class="color-selector" style="background-color: ${color}" onclick="changeColor(${i})"><i class="fa-solid fa-circle"></i></div>`;
    } else {
      html += `<div class="color-selector" style="background-color: ${color}" onclick="changeColor(${i})"></div>`;
    }
  }

  document.getElementById("color-select").innerHTML = html;
}
