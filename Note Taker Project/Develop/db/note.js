const fs = require('fs').promises;



class Note {
    read() {
        return fs.readFile("./db/db.json" , "utf8");
    }
    allNotes() {
        return this.read().then(notes => {
            const parseNotes = JSON.parse(notes).map((note) => note);
            return parseNotes
        });
    }
    postNotes(note) {
        return this.allNotes().then((notes) => [...notes,note])
        .then((noteUpdate) => this.write(noteUpdate))
        .then(() => note);
    }
}

module.exports = new Note();