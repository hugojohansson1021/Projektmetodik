// Saves note from user
function save() {
  // Get both inputs from id
  const title = document.querySelector("#title-input").value;
  const text = document.querySelector("#text-input").value;

  // Grab font check for null object
  const font = !localStorage.getItem("selectedFont")
    ? "Arial"
    : localStorage.getItem("selectedFont");

  // Date stuff
  const date = new Date();
  const formatedDate = `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()}`;

  // Create note object
  const note = {
    title: title,
    text: text,
    favorite: false,
    creationDate: formatedDate,
    fontFamily: font,
  };

  // Get notes from localStorage
  let notes = localStorage.getItem("saved-notes");

  // redifine notes to either an empty array or to saved array
  notes = !notes ? [] : JSON.parse(notes);

  //Add note
  notes.push(note);

  // Add stringified array to localstorage
  localStorage.setItem("saved-notes", JSON.stringify(notes));

  // Navigate back to index
  window.location.href = "index.html";
}
