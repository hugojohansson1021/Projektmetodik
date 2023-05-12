function loadNotes() {
  // Get note div element
  const noteDiv = document.getElementById("note-div")

  // Get note array as JSON-string
  let notes = localStorage.getItem("saved-notes");

  if(notes == undefined || notes.toString() == "[]") {
    noteDiv.innerHTML = "<h3>No notes were found<h3>"
    return;
  }

  // Redifine notes as parsed object
  notes = JSON.parse(notes);

  // Create an empty string to hold html
  let appendString = "";


  for(let i = notes.length-1; i >= 0; i--) {
    const note = notes[i];
    appendString += `<div class='note'>
      <h3 contenteditable="true">${note.title}</h3>
      <p contenteditable="true">${note.text}</p><br>
      <button onclick="saveNote(${i})">Save</button>
      <a href="#" onclick="deleteNote(${i})">delete</a>
    </div>`;
  }
  

  // Set the innerhtml of notediv to the appendstring
  noteDiv.innerHTML = appendString;

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


function saveNote(index) {
  // Get notes from localStorage
  let notes = localStorage.getItem("saved-notes");
  notes = notes == undefined ? [] : JSON.parse(notes);

  // Get the updated title and text directly from the note's content in the HTML
  const updatedTitle = document.querySelectorAll('.note h3')[index].innerText;
  const updatedText = document.querySelectorAll('.note p')[index].innerText;

  // Update the note
  notes[index].title = updatedTitle;
  notes[index].text = updatedText;

  // Save notes back to localStorage
  localStorage.setItem("saved-notes", JSON.stringify(notes));

  // Optionally, you can reload the notes to show the updated note
  loadNotes();
}



