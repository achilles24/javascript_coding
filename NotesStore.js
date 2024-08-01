class NotesStore {
    //add your code here
    constructor() {
      this.notes = [];
    }
    addNote(state, name) {
      if(!name) {
        throw Error("Name cannot be empty")
      }
       else if (state != 'completed' && state != 'active' && state != 'others') {
        throw Error(`Invalid state ${state}`)
      } 
      else {
        this.notes.push({'name': name, 'state': state})
      }
    }
    getNotes(state) {
      if (state != 'completed' && state != 'active' && state != 'others') {
        throw Error(`Invalid state ${state}`)
      }
      return this.notes.filter(note => note.state === state).map(note => note.name);
    }
}

nte = new NotesStore()
nte.addNote('completed', 'study')
nte.getNotes('completed')
