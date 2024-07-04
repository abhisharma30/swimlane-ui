import "../styles/Swimlane.css";

const Swimlane = ({ stage, blocks, onBlockMove, onBlockClick }) => {
  const handleDragStart = (event, block) => {
    event.dataTransfer.setData("block", JSON.stringify(block));
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    const block = JSON.parse(event.dataTransfer.getData("block"));
    onBlockMove(block, stage);
  };

  const getBlockStyle = (stage) => {
    switch (stage) {
      case "To Do":
        return {
          color: "#004085",
          backgroundColor: "#cce5ff",
          borderColor: "#b8daff",
        };
      case "In Progress":
        return {
          color: "#0c5460",
          backgroundColor: "#d1ecf1",
          borderColor: "#bee5eb",
        };
      case "Blocked":
        return {
          color: "#856404",
          backgroundColor: "#fff3cd",
          borderColor: "#ffeeba",
        };
      case "Done":
        return {
          color: "#155724",
          backgroundColor: "#d4edda",
          borderColor: "#c3e6cb",
        };
      default:
        return {};
    }
  };

  return (
    <div
      className="swimlane p-2"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <h5>{stage}</h5>
      {blocks.map((block) => (
        <div
          key={block.id}
          className="block p-2 mb-2"
          draggable
          onDragStart={(event) => handleDragStart(event, block)}
          onClick={() => onBlockClick(block)}
          style={getBlockStyle(block.stage)}
        >
          {block.name}
        </div>
      ))}
    </div>
  );
};

export default Swimlane;
