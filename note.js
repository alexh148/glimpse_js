function Note () {
  this.notesList = ["Hello World"]
};

Note.prototype.addNote = function (newNote) {
  this.notesList.push(newNote)
};
