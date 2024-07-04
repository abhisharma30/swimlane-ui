const Filter = ({ value, onChange }) => {
  return (
    <input
      type="text"
      className="form-control mb-3 p-2"
      placeholder="Filter/Search Blocks..."
      value={value}
      onChange={onChange}
    />
  );
};

export default Filter;
