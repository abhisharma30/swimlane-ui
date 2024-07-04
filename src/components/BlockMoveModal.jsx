import React, { useState } from "react";
import "../styles/BlockMoveModal.css";

const BlockMoveModal = ({ block, onConfirm, onClose }) => {
  const [additionalData, setAdditionalData] = useState("");

  const handleConfirm = () => {
    onConfirm(additionalData);
  };

  return (
    <div className="modal d-block">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Move {block.name}</h5>
            <button type="button" className="close" onClick={onClose}>
              <span>&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <p>Remarks for moving {block.name} to {block.stage} stage.</p>
            <input
              type="text"
              className="form-control"
              placeholder="Enter additional data"
              value={additionalData}
              onChange={(e) => setAdditionalData(e.target.value)}
            />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="button" className="btn btn-primary" onClick={handleConfirm}>
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockMoveModal;
