import React, { useState, useEffect } from "react";
import "./App.css";
import Swimlane from "./components/Swimlane";
import BlockDetails from "./components/BlockDetails";
import Filter from "./components/Filter";
import Header from "./components/Header";
import BlockMoveModal from "./components/BlockMoveModal";
import masterConfig from "./config/masterConfig";
import data from "./data.json";

const App = () => {
  const [blocks, setBlocks] = useState([]);
  const [stages, setStages] = useState([]);
  const [selectedBlock, setSelectedBlock] = useState(null);
  const [isMoveModalOpen, setIsMoveModalOpen] = useState(false);
  const [blockToMove, setBlockToMove] = useState(null);
  const [targetStage, setTargetStage] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    setBlocks(data.blocks);
    setStages(data.stages);
  }, []);

  const handleBlockMove = (block, toStage) => {
    const fromStage = block.stage;
    if (masterConfig[fromStage].includes(toStage)) {
      setBlockToMove(block);
      setTargetStage(toStage);
      setIsMoveModalOpen(true);
    } else {
      alert("Move not allowed");
    }
  };

  const confirmBlockMove = (additionalData) => {
    const newBlocks = blocks.map((b) =>
      b.id === blockToMove.id
        ? {
            ...b,
            stage: targetStage,
            history: [
              ...b.history,
              { from: blockToMove.stage, to: targetStage, date: new Date() },
            ],
            additionalData,
          }
        : b
    );
    setBlocks(newBlocks);
    setIsMoveModalOpen(false);
    setBlockToMove(null);
    setTargetStage("");
  };

  const handleBlockClick = (block) => {
    setSelectedBlock(block);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    setSelectedBlock(null);
  };

  const filteredBlocks = blocks.filter((block) =>
    block.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="App">
      <Header />
      <div className="container mt-4">
        <Filter value={filter} onChange={handleFilterChange} />
        <div className="row">
          {stages.map((stage) => (
            <Swimlane
              key={stage}
              stage={stage}
              blocks={filteredBlocks.filter((block) => block.stage === stage)}
              onBlockMove={handleBlockMove}
              onBlockClick={handleBlockClick}
            />
          ))}
        </div>
        {selectedBlock && <BlockDetails block={selectedBlock} />}
        {isMoveModalOpen && (
          <BlockMoveModal
            block={blockToMove}
            onConfirm={confirmBlockMove}
            onClose={() => setIsMoveModalOpen(false)}
          />
        )}
      </div>
    </div>
  );
};

export default App;
