var note = new Note();

describe("#notesList", function() {
  it("Should have a list of notes", function() {
    glimpse(note.notesList).hasThisInIt("Hello World");
  })
})

describe("#addNote", function() {
  it("Should have a list of notes", function() {
    note.addNote("Another note")
    glimpse(note.notesList).hasThisInIt("Another note");
  })
})
