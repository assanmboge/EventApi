import React from 'react';

const Buttons = ({ icon, onClick, buttonTitle }) => {
  return (
  <div className={icon} onClick={onClick}>
   { buttonTitle }
  </div>
  );
};

export default Buttons;
