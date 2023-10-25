import { Component } from "react";

class MarkdownInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.editingNote ? this.props.editingNote.title : "",
      content: this.props.editingNote ? this.props.editingNote.content : "",
    };
  }

  handleTitleChange = (e) => {
    this.setState({ title: e.target.value });
  };

  handleContentChange = (e) => {
    this.setState({ content: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.editingNote) {
      // Handle update logic when editing
      this.props.onSave(this.state.title, this.state.content);
    } else {
      // Handle add logic when creating a new note
      this.props.onSubmit(this.state.title, this.state.content);
    }
    this.setState({ title: "", content: "" });
  };

  render() {
    return (
      <form className="note-form" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Titre"
          value={this.state.title}
          onChange={this.handleTitleChange}
        />
        <textarea
          placeholder="Contenu"
          value={this.state.content}
          onChange={this.handleContentChange}
        />
        <button type="submit">
          {this.props.editingNote ? "Modifier/Sortir" : "Ajouter"}
        </button>
      </form>
    );
  }
}
/*
MarkdownInput.propTypes = {
  editingNote: PropTypes.object,
  onSave: PropTypes.func,
  onSubmit: PropTypes.func,
};
*/
export default MarkdownInput;
