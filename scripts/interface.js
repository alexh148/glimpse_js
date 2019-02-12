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
      text = (`<div id="links" class="rounded"> ${allMessages[i]}</div>`)
      document.getElementById('link-container').innerHTML += text;
    }
  }

  function loadLastMessage() {
    console.log(note)
  text = (`<div id="links" class="rounded"> <a href="">${note.notesList.slice(-1)[0]}</a></div>`)
  document.getElementById('link-container').innerHTML += text;
  }

  function clearBox() {
    document.getElementById('message').value = "";
  }

});
