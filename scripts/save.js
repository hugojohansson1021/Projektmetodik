// Saves note from user
function save() {
  // Get both inputs from id
  const title = document.querySelector("#title-input").value;
  const text = document.querySelector("#text-input").value;

  // Date stuff
  const date = new Date();
  const formatedDate = `${date.getDate()}-${
    date.getMonth() + 1
  }-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;

  // Create note object
  const note = {
    title: title,
    text: text,
    favorite: false,
    creationDate: formatedDate,
    backgroundColor: COLOR_VALUES[selectedColor],
    fontFamily: selectedFont,
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
