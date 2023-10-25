import { Component } from "react";
import MarkdownInput from "./components/MarkdownInput";
import NoteList from "./components/NoteList";
import NoteDisplay from "./components/NoteDisplay";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMarkdownInput: false,
      notes: [], // Tableau conteant les notes
      editingNote: null,
      selectedNote: null,
    };
  }

  componentDidMount() {
    // Charger notes depuis localStorage lors du montage du composant
    const savedNotes = localStorage.getItem("notes");
    if (savedNotes) {
      this.setState({ notes: JSON.parse(savedNotes) });
    }
  }

  saveToLocalStorage = () => {
    // Sauvegarder notes en localStorage
    localStorage.setItem("notes", JSON.stringify(this.state.notes));
  };

  addNote = (title, content) => {
    const newNote = { title, content };
    this.setState(
      (prevState) => ({
        notes: [...prevState.notes, newNote],
        showMarkdownInput: false,
      }),
      () => {
        // Après avoir mis à jour l'état, sauvegarder les données dans le localStorage
        this.saveToLocalStorage();
      }
    );
  };

  toggleMarkdownInput = () => {
    this.setState((prevState) => ({
      showMarkdownInput: !prevState.showMarkdownInput,
    }));
  };

  editNote = (note) => {
    this.setState({
      editingNote: note,
      showMarkdownInput: true,
    });
  };

  saveEditedNote = (editedTitle, editedContent) => {
    const { notes, editingNote } = this.state;
    const updatedNotes = notes.map((note) =>
      note === editingNote
        ? { ...note, title: editedTitle, content: editedContent }
        : note
    );

    this.setState(
      {
        notes: updatedNotes,
        editingNote: null,
        showMarkdownInput: false,
      },
      () => {
        this.saveToLocalStorage();
      }
    );
  };

  deleteNote = (note) => {
    const updatedNotes = this.state.notes.filter((n) => n !== note);
    this.setState(
      {
        notes: updatedNotes,
        editingNote: null,
      },
      () => {
        this.saveToLocalStorage();
      }
    );
  };

  render() {
    return (
      <div className="container">
        <div className="left-column">
          <button onClick={this.toggleMarkdownInput} className="red-button">
            Ajouter une note
          </button>
          <NoteList
            notes={this.state.notes}
            editNote={this.editNote}
            deleteNote={this.deleteNote}
            showMarkdownInput={this.showMarkdownInput}
          />
        </div>
        <div className="right-column">
          {this.state.selectedNote && (
            <NoteDisplay note={this.state.selectedNote} />
          )}
          {this.state.showMarkdownInput && (
            <MarkdownInput
              onSubmit={this.addNote}
              editingNote={this.state.editingNote}
              onSave={this.saveEditedNote}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;
