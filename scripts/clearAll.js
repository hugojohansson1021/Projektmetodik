// Saves note from user
function clearAll() {
    // Clear all notes
    localStorage.clear();
    console.log("localStorage = " + localStorage);
    // Get both inputs from id
    // const title = document.querySelector("#title-input").value;
    // const text = document.querySelector("#text-input").value;
  
    // Create note object
    // const note = { title: title, text: text };
  
    // Get notes from localStorage
    // let notes = localStorage.getItem("saved-notes");
  
    // console.log(notes);
  
    // redifine notes to either an empty array or to saved array
    // notes = notes == undefined ? (notes = []) : (notes = JSON.parse(notes));
  
    //Add note
    // notes.push(note);
  
    // Add stringified array to localstorage
    // localStorage.setItem("saved-notes", JSON.stringify(notes));
  
    // Navigate back to index
    // window.location.href="index.html"
  }
  