// List of color values
const COLOR_VALUES = [
  "#FF9879", // RED
  "#F1C8DB", // PINK
  "#FFDF9F", // YELLOW
  "#75E4B3", // GREEN
  "#59D2FE", // BLUE
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

// Sorts by color
function loadByColor(notes) {
  let html = "";

  // O(5n) ?
  for (let c in COLOR_VALUES) {
    for (let i in notes) {
      const note = notes[i];

      // Make sure its this colors "turn"
      if (note.backgroundColor == c) {
        const favoriteIcon = note.favorite
          ? "fa-solid fa-star"
          : "fa-regular fa-star";

        html += getNoteTemplate(i, note, favoriteIcon);
      }
    }
  }

  document.getElementById("note-div").innerHTML = html;
}
