import { useRef } from "react";

const Textarea = ({
  textara,
  setTextara,
  setInptValue,
  setNotes,
  activeNote,
}) => {
  const textAraRef = useRef(null);

  const handleTextara = (e) => {
    setTextara(e.target.value);
  };

  const handleEditBtn = () => {
    textAraRef.current.focus();
  };

  const handleDeleteBtn = () => {
    setTextara("");
    setInptValue("");

    setNotes((prev) => {
      return prev.map((n, index) =>
        index === activeNote ? { url: "", text: "" } : n,
      );
    });
  };

  return (
    <>
      <textarea
        placeholder="ملاحظات..."
        value={textara}
        onChange={handleTextara}
        ref={textAraRef}
      />

      <div className="btns">
        <button type="submit">Save</button>
        <button type="button" onClick={handleEditBtn}>
          Edit
        </button>
        <button type="button" onClick={handleDeleteBtn}>
          Delete
        </button>
      </div>
    </>
  );
};

export default Textarea;
