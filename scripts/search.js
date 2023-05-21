// Search for a note
function search() {
    // Get desired div element
    const desiredDiv = document.getElementById("desired-note-div");
  
    // Get note array as JSON-string
    let notes = localStorage.getItem("saved-notes");
  
    if (notes == undefined || notes.toString() == "[]") {
      noteDiv.innerHTML = "<h1> Here: no notes were found in localStorage</h1>";
      return;
    }
    var wantedTitle = document.querySelector("#titleSearch").value;
    var wantedText = document.querySelector("#textSearch").value;
    var wantedDateText = document.querySelector("#dateSearch").value;

    // Redefine notes as parsed object
    notes = JSON.parse(notes);
    console.log(" BUT here notes became: ", notes);

    // Create an empty string to hold html
    let appendString = "";

    // TODO : Search by wantedText
    // TODO : Search by wantedDate
    
    for(let i in notes) {
        let note = notes[i];
        if (note.title.contains(wantedTitle)) {
            console.log("BINGO");
            console.log("Diserd note is: ", note);
            //desiredDiv.innerHTML="<br />Bingo<br />"+note.toString();
            appendString += `<div class='desired-searched-note'><h3>${note.title}</h3><p>${note.text}</p></div>`;
            // Set the innerhtml of notediv to the appendstring
             desiredDiv.innerHTML = appendString;
        }
    }
  
  }
