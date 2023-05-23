function loadNotes() {
  var e = document.getElementById("sortby-dropdown");
  var selectedOption = e.options[e.selectedIndex].value;
  // Get note div element
  const noteDiv = document.getElementById("note-div");

  // Get note array as JSON-string
  let notes = localStorage.getItem("saved-notes");

  if (notes == undefined || notes.toString() == "[]") {
    noteDiv.innerHTML = "<h3>No notes were found<h3>";
    return;
  }

  // Redefine notes as parsed object
  notes = JSON.parse(notes);

  // Determin what to do based on dropdown
  const dropdown = document.getElementById("sortby-dropdown");

  switch (dropdown.value) {
    case "newest":
      loadNewest(notes);
      break;
    case "favorite":
      loadFavorites(notes);
      break;
    case "oldest":
      loadOldest(notes);
      break;
    case "color":
      loadByColor(notes);
      break;
  }
}

// Loads newest to oldest
function loadNewest(notes) {
  // Initial html string
  let html = "";

  for (let i = notes.length - 1; i >= 0; i--) {
    // Add html
    const note = notes[i];

    const favoriteIcon = note.favorite
      ? "fa-solid fa-star"
      : "fa-regular fa-star";

    html += getNoteTemplate(i, note, favoriteIcon);
  }

  document.getElementById("note-div").innerHTML = html;
}

// Loads oldest to newest
function loadOldest(notes) {
  // Initial html string
  let html = "";

  for (let i in notes) {
    // Add html
    const note = notes[i];

    const favoriteIcon = note.favorite
      ? "fa-solid fa-star"
      : "fa-regular fa-star";

    html += getNoteTemplate(i, note, favoriteIcon);
  }

  document.getElementById("note-div").innerHTML = html;
}

function getNoteTemplate(i, note, favoriteIcon) {
  const bgColor = COLOR_VALUES[note.backgroundColor];
  return `<div class="note" style="background-color: ${bgColor}">
      <h3 contenteditable="true" style="font-family: ${note.fontFamily}" oninput="saveNote(${i}, this.parentElement)">${note.title}</h3>
      <p contenteditable="true" style="font-family: ${note.fontFamily}" oninput="saveNote(${i}, this.parentElement)">${note.text}</p><br>
      <p class="date">${note.creationDate}</p><br />


    <div class="icon-div">
      <a class= "trash-icon" onclick="deleteNote(${i})"><i class="fa-regular fa-trash-can"></i></a>

      <a class = "star-icon" onclick="toggleFavorite(${i})"><i class="${favoriteIcon}"></i></a>
    </div>
      </div>`;
}

function getResultNoteTemplate(i, note) {
  const bgColor = COLOR_VALUES[note.backgroundColor];
  return `<div class="note" style="background-color: ${bgColor}">
      <h3 contenteditable="false" style="font-family: ${note.fontFamily}" oninput="saveNote(${i}, this.parentElement)">${note.title}</h3>
      <p contenteditable="false" style="font-family: ${note.fontFamily}" oninput="saveNote(${i}, this.parentElement)">${note.text}</p><br>
      <p class="date">${note.creationDate}</p><br />
      </div>`;
}
