var note = new Note();

document.addEventListener('DOMContentLoaded', function () {
  loadMessages();

});

submit.addEventListener('click', function(event) {
   event.preventDefault();
   var message = document.getElementById('message').value
   note.addNote(message)
   loadLastMessage();
   clearBox();
 });

function viewMessage(index) {
  var noteBody = note.notesList[index];// whatever id was clicked on, the value
  var text = `<p id="visible"> ${noteBody}</p>`;
  document.getElementById('view-all').innerHTML = text;
}

function goBack() {
  loadMessages();
}

function loadMessages() {
  document.getElementById('view-all').innerHTML = "";
  var allMessages = note.notesList
  for (i = 0; i < allMessages.length; i++ ){
    text = (`<input type="button" id="${i}" class="rounded" value="${allMessages[i]}" onclick="viewMessage(${i})">`)
    document.getElementById('view-all').innerHTML += text;
  }
}

function loadLastMessage() {
  console.log(note)
text = (`<input type="button" id="${i = note.notesList.length - 1}" class="rounded" value="${note.notesList.slice(-1)[0]}" onclick="viewMessage(${i})">`)
document.getElementById('view-all').innerHTML += text;
}

function clearBox() {
  document.getElementById('message').value = "";
}
