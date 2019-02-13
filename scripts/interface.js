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
  showSection('view-full');
  hideSection('add-note');
  hideSection('view-all');
  var noteBody = note.notesList[index];// whatever id was clicked on, the value
  var text = `<p id="visible"> ${noteBody}</p>`;
  document.getElementById('note-body').innerHTML = text;
}

function goBack() {
  hideSection('view-full');
  showSection('add-note');
  showSection('view-all');
}

function loadMessages() {
  // document.getElementById('view-all').innerHTML = "";
  var allMessages = note.notesList
  for (i = 0; i < allMessages.length; i++ ){
    text = (`<input type="button" id="${i}" class="button" value="${allMessages[i]}" onclick="viewMessage(${i})">`)
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

function hideSection(id) {
  var x = document.getElementById(id)
  x.style.display = 'none';
}

function showSection(id) {
  var x = document.getElementById(id)
  x.style.display = 'block';
}
