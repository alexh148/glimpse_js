function Note () {
  this.notesList = ["Hello World"]
};

Note.prototype.addNote = function (newNote) {
  this.notesList.push(newNote)
};

Note.prototype.getNote = function (index) {
  return this.notesList[index]
};
