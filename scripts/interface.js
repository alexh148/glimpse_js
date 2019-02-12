document.addEventListener('DOMContentLoaded', function () {
  var note = new Note();

  submit.addEventListener('click', function(event) {
    event.preventDefault();
    var message = document.getElementById('message').value
    note.addNote(message)
  });
});
