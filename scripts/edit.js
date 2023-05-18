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
}
