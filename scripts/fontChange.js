let selectedFont = "Arial";

function changeFont() {
  // Get selected font
  const fontSelect = document.getElementById("font-select");
  selectedFont = fontSelect.value;

  // Grab inputs
  const textArea = document.getElementById("text-input");
  const titleInput = document.getElementById("title-input");

  // Change their font
  textArea.style.fontFamily = selectedFont;
  titleInput.style.fontFamily = selectedFont;
}

