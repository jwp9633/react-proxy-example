import React from 'react';

const DisplayBoard = ({ numberOfItems, getAllItem }) => {
  return (
    <div className="display-wrapper">
      <div className="display-box">
        <div className="display-board">
          <h4>생성된 수</h4>
          <div className="number">{numberOfItems}</div>
        </div>
        <div className="get-button">
          <button onClick={() => getAllItem()}>Get all Items</button>
        </div>
      </div>
    </div>
  );
};

export default DisplayBoard;
