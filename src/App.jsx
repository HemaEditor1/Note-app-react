import { useEffect, useState } from "react";
import Note from "../componantss/Note";
import Notes from "../componantss/Notes";

function App() {
  // ------------------------------------------------------------------ HOOKS
  const [notes, setNotes] = useState(() => {
    const notsData = localStorage.getItem("Notes");

    return notsData ? JSON.parse(notsData) : [];
  });

  const [activeNote, setActiveNote] = useState(() => {
    const saved = localStorage.getItem("activeNote");
    return saved !== null ? Number(saved) : null;
  }); // لتحديد اي نوته مفتوحه

  useEffect(() => {
    localStorage.setItem("Notes", JSON.stringify(notes));
  }, [notes]);
  // ------------------------------------------------------------------ HOOKS

  // ------------------------------------------------------------------ FUNCTIONS
  const handleAddNewNots = () => {
    setNotes((prev) => [...prev, { url: "", text: "" }]);
  };

  const handleDelete = (index) => {
    setNotes((prev) => prev.filter((_, i) => i !== index));
  };

  const handleOpenNote = (index) => {
    setActiveNote(index);
    localStorage.setItem("activeNote", index);
  };

  const handleCloseNote = () => {
    setActiveNote(null);
    localStorage.removeItem("activeNote");
  };
  // ------------------------------------------------------------------ FUNCTIONS

  return (
    <>
      {activeNote !== null ? (
        <Note
          handleCloseNote={handleCloseNote}
          note={notes[activeNote]} // النوتة المفتوحة
          setNotes={setNotes} // فنكشن تعديل النوتس
          activeNote={activeNote} // رقم النوتة
        />
      ) : (
        <>
          <h1>Note App React</h1>

          <Notes
            notes={notes}
            activeNote={activeNote}
            handleOpenNote={handleOpenNote}
            handleDelete={handleDelete}
            handleAddNewNots={handleAddNewNots}
            setNotes={setNotes}
          />
        </>
      )}
    </>
  );
}

export default App;
