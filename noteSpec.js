var note = new Note();

describe("#notesList", function() {
  it("Should have a list of notes", function() {
    glimpse(note.notesList).hasThisInIt("Hello World");
  })
})

describe("#addNote", function() {
  it("Should add a new note to the list", function() {
    note.addNote("Another note")
    glimpse(note.notesList).hasThisInIt("Another note");
  })
})

describe("#getNote", function() {
  it("Should retrive a note from the notes list based on an index passed as an argument", function() {
    glimpse(note.getNote(1)).isTheSameAs("Another note");
  })
})
