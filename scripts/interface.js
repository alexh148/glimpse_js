document.addEventListener('DOMContentLoaded', function () {
  var note = new Note();
  loadMessages();

  submit.addEventListener('click', function(event) {
    event.preventDefault();
    var message = document.getElementById('message').value
    note.addNote(message)
    loadLastMessage();
    clearBox();
  });

  function loadMessages() {
    var allMessages = note.notesList
    for (i = 0; i < allMessages.length; i++ ){
      text = (`<input type="button" id="${i}" class="rounded" value="${allMessages[i]}" onclick="showdiv()">`)
      document.getElementById('link-container').innerHTML += text;
    }
  }

  function loadLastMessage() {
    console.log(note)
  text = (`<input type="button" id="${note.notesList.length + 1}" class="rounded" value="${note.notesList.slice(-1)[0]}" onclick="showdiv()">`)
  document.getElementById('link-container').innerHTML += text;
  }

  function clearBox() {
    document.getElementById('message').value = "";
  }

});
