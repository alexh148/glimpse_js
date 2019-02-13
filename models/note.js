function Note () {
  this.notesList = ["...............Created By...............Alex, Haba, John, Katie, & Paul"]
};

Note.prototype.addNote = function (newNote) {
  this.notesList.push(newNote)
};

Note.prototype.getNote = function (index) {
  return this.notesList[index]
};
