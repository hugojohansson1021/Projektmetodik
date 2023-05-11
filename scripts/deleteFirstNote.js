// Deletes first note from user
function deleteFirstNote() {
    // Get notes from localStorage
    let notes = localStorage.getItem("saved-notes");
  
    console.log(" 'saved-notes' are: " + notes);
  
    // redifine notes to either an empty array or to saved array
    notes = notes == undefined ? (notes = []) : (notes = JSON.parse(notes));
  
    console.log(notes);
    notes.pop();

    // Add stringified array to localstorage
    localStorage.setItem("saved-notes", JSON.stringify(notes));
  
    // Navigate back to index
    window.location.href="index.html"
  }
  