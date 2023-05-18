function toggleFavorite(index) {
  // Grab the notes
  let notes = JSON.parse(localStorage.getItem("saved-notes"));

  // Toggle favorite
  notes[index].favorite = !notes[index].favorite;

  // Save changes
  localStorage.setItem("saved-notes", JSON.stringify(notes));

  // Reload notes
  loadNotes();
}
