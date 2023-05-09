function loadNotes() {
  // Get note div element
  const noteDiv = document.getElementById("note-div")

  // Get note array as JSON-string
  let notes = localStorage.getItem("saved-notes");

  console.log(notes)

  if(notes == undefined) {
    noteDiv.innerHTML = "<h3>No notes were found<h3>"
    return;
  }

  // Redifine notes as parsed object
  notes = JSON.parse(notes);

  // Create an empty string to hold html
  let appendString = "";

  for(let i in notes) {
    // Create a div with title and text for each note
    const note = notes[i];
    appendString += `<div class='note'><h3>${note.title}</h3><p>${note.text}</p></div>`;
  }

  // Set the innerhtml of notediv to the appendstring
  noteDiv.innerHTML = appendString;

}