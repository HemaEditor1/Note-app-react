import { useState } from "react";
import Inpt from "./Inpt";
import Textarea from "./Textarea";

function Note({ handleCloseNote, note, setNotes, activeNote }) {
  const [inptValue, setInptValue] = useState(note.url);
  const [textara, setTextara] = useState(note.text);

  const handleSubmit = (e) => {
    e.preventDefault();
    setNotes((prev) =>
      prev.map((n, index) =>
        index === activeNote ? { url: inptValue, text: textara } : n,
      ),
    );
  };

  return (
    <>
      <div className="headerNote">
        <h1>Note React</h1>
        <button onClick={handleCloseNote}>&gt;</button>
      </div>
      <form onSubmit={handleSubmit}>
        <Inpt inptValue={inptValue} setInptValue={setInptValue} />
        <Textarea
          textara={textara}
          setTextara={setTextara}
          setInptValue={setInptValue}
          setNotes={setNotes}
          activeNote={activeNote}
        />
      </form>
    </>
  );
}

export default Note;
