const Notes = ({
  notes,
  activeNote,
  handleOpenNote,
  handleDelete,
  handleAddNewNots,
}) => {
  return (
    <div className="notesGrid">
      {notes.map((note, index) => (
        <div
          key={index}
          className={`noteFrame ${activeNote === index ? "openNote" : ""}`}
          onClick={() => handleOpenNote(index)}
        >
          <h2>{note.url !== "" ? note.url : "Empty Note!"}</h2>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleDelete(index);
            }}
            className="delBtn"
          >
            -
          </button>
        </div>
      ))}

      <div>
        <button onClick={handleAddNewNots} className="addBtn">
          +
        </button>
      </div>
    </div>
  );
};

export default Notes;
