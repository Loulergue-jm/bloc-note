const NoteDisplay = ({ note }) => {
  return (
    <div className="note-display right-column">
      <h3>{note.title}</h3>
      <p>{note.content}</p>
    </div>
  );
};

export default NoteDisplay;
