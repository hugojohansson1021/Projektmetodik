// Search for a note
function prepare_search() {
  // Get note array as JSON-string
  let notes = localStorage.getItem("saved-notes");

  // Look if note array is empty
  if (notes == undefined || notes.toString() == "[]") {
    noteDiv.innerHTML = "<h1>No notes exist</h1>";
    return;
  }

  const searchQuery = document
    .querySelector("#search-input")
    .value.toString()
    .toLowerCase();

  // Redefine notes as parsed object
  notes = JSON.parse(notes);

  // Create an empty string to hold html
  let appendString = "";

  for (let i in notes) {
    let note = notes[i];
    if (
      note.title.toLowerCase().includes(searchQuery) ||
      note.text.toLowerCase().includes(searchQuery) ||
      note.creationDate.toLowerCase().includes(searchQuery)
    ) {
      appendString += getResultNoteTemplate(i, note);
    }
  }

  if (appendString == "") {
    const input = document.getElementById("search-input");
    const button = document.getElementById("search-button");

    input.style.border = "1px solid #fe5656";
    button.style.border = "1px solid #fe5656";

    return;
  }

  localStorage.setItem("search-result", appendString);
  window.location.href = "search.html";
}

function getSearchResult() {
  const result = localStorage.getItem("search-result");

  console.log(result);

  if (!result) window.location.href = "index.html";

  // Get desired div element
  const desiredDiv = document.getElementById("desired-note-div");

  // append the string
  desiredDiv.innerHTML = result;
}
