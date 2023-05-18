
function changeFont() {
    var fontSelect = document.getElementById("font-select");
    var selectedFont = fontSelect.value;
    var textArea = document.getElementById("text-input");
    textArea.style.fontFamily = selectedFont;
    localStorage.setItem("selectedFont", selectedFont); // Save selected font to localStorage
  }