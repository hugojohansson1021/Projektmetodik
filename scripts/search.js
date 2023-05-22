// Search for a note
function search() {
  // Get desired div element
  const desiredDiv = document.getElementById("desired-note-div");

  // Get note array as JSON-string
  let notes = localStorage.getItem("saved-notes");

  // Look if note array is empty
  if (notes == undefined || notes.toString() == "[]") {
    noteDiv.innerHTML = "<h1>No notes exist</h1>";
    return;
  }

  const searchQuery = document.querySelector("#searchInput").value;

  // Redefine notes as parsed object
  notes = JSON.parse(notes);

  // Create an empty string to hold html
  let appendString = "";

  for (let i in notes) {
    let note = notes[i];
    if (
      note.title.includes(searchQuery) ||
      note.text.includes(searchQuery) ||
      note.creationDate.includes(searchQuery)
    ) {
      appendString += `<div class='desired-searched-note'><h3>${note.title}</h3><p>${note.text}</p><p>${note.creationDate}</p></div>`;
    }
  }

  // Append html to div element
  desiredDiv.innerHTML = appendString;
}
