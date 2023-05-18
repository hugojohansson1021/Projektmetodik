function deleteNote(index) {
  // Get array
  let notes = localStorage.getItem("saved-notes");
  if (notes == undefined) return;

  notes = JSON.parse(notes);

  // Remove item
  notes.splice(index, 1);

  // Save array and redirect
  localStorage.setItem("saved-notes", JSON.stringify(notes));

  // Reload notes
  loadNotes();
}

