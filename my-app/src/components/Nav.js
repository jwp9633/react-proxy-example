import React from 'react';

const Nav = ({ tabs, handleCurrentTab }) => {
  return (
    <nav>
      {tabs.map((tab, index) => (
        <button key={index} onClick={handleCurrentTab}>
          {tab}
        </button>
      ))}
    </nav>
  );
};

export default Nav;
