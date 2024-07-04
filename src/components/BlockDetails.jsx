import React from "react";
import "../styles/BlockDetails.css";

const BlockDetails = ({ block }) => {
  return (
    <div className="block-details">
      <h5>{block.name} Info:</h5>
      <p>
        Current Stage: <span class="badge badge-secondary">{block.stage}</span>{" "}
      </p>
      {block.additionalData && <p>Additional Data: {block.additionalData}</p>}
      <h5>History</h5>
      <ul>
        {block.history.map((entry, index) => (
          <li key={index}>{`${entry.from} -> ${entry.to} on ${new Date(
            entry.date
          ).toLocaleString()}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default BlockDetails;
