const NoteList = ({ notes, editNote, deleteNote, showMarkdownInput }) => {
  return (
    <div>
      {notes.map((note, index) => (
        <div key={index}>
          <h3>{note.title}</h3>
          <p>{note.content.split(" ").slice(0, 7).join(" ")}...</p>
          {!showMarkdownInput && ( // Use a conditional rendering
            <div>
              <button onClick={() => editNote(note)}>Voir/Modifier</button>
              <button onClick={() => deleteNote(note)}>Supprimer</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default NoteList;
