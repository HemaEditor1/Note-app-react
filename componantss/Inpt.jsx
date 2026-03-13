const Inpt = ({ inptValue, setInptValue }) => {
  const handleUrl = (e) => {
    setInptValue(e.target.value);
  };

  return (
    <input
      type="text"
      placeholder="العنوان..."
      value={inptValue}
      onChange={handleUrl}
    />
  );
};

export default Inpt;
