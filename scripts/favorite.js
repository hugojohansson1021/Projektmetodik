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

function loadFavorites(notes) {
  // Initial html string
  let html = "";

  for (let i = notes.length - 1; i >= 0; i--) {
    // Add html
    const note = notes[i];

    // Only add favorites
    if (note.favorite) html += getNoteTemplate(i, note, "fa-solid fa-star");
  }

  document.getElementById("note-div").innerHTML = html;
}
