import React from 'react';



const Header = ({ title, lead }) => {
  return (
  <div>
    <header>
      { title }
    </header>
    <div className="background-image">
      <img src='img/balloons1.png' alt="dark" />
    </div>

  </div>
)

};

export default Header;
