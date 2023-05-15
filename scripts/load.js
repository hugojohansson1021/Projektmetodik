function loadNotes() {
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

  // Initial html string
  let html = "";

  for (let i = notes.length - 1; i >= 0; i--) {
    // Add html
    // NOTE: Reformating this string will break edit function
    // TODO: Make this safer
    const note = notes[i];
    html += `<div class="note">
      <h3 contenteditable="true" oninput="saveNote(${i}, this.parentElement)">${note.title}</h3>
      <p contenteditable="true" oninput="saveNote(${i}, this.parentElement)">${note.text}</p><br>
      <button onclick="deleteNote(${i})">delete</a>
      </div>`;
  }

  document.getElementById("note-div").innerHTML = html;
}

function editNote(index, field, value) {
  // Get notes from localStorage
  let notes = localStorage.getItem("saved-notes");
  notes = notes == undefined ? [] : JSON.parse(notes);

  // Update the note
  notes[index][field] = value;

  // Save notes back to localStorage
  localStorage.setItem("saved-notes", JSON.stringify(notes));
}

function saveNote(index, divElem) {
  // Get notes from localStorage
  let notes = localStorage.getItem("saved-notes");
  notes = !notes ? [] : JSON.parse(notes);

  // Get the updated title and text directly from the note's content in the HTML
  const updatedTitle = divElem.childNodes[1].innerText;
  const updatedText = divElem.childNodes[3].innerText;

  // Update the note
  notes[index].title = updatedTitle;
  notes[index].text = updatedText;

  // Save notes back to localStorage
  localStorage.setItem("saved-notes", JSON.stringify(notes));

  // Reload homepage
  // loadNotes();
}
