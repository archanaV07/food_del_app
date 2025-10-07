import React from 'react';
import './Header.css'
import header_Img from '/assets/header_img.png' ;

const Header = () => {
  return (
    <div className='header'
    style={{
      backgroundImage: `url(${header_Img})`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',  
      }}
      >
      <div className="header-contents">
      <h2> Order your food here! </h2>
      <p>Delicious food, endless choices, and lightning-fast delivery — because hunger can’t wait</p>
      <button> View Menu</button>
      </div>
    </div>
  )
}

export default Header;

