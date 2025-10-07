import React, { useState , useContext } from 'react';
import './Navbar.css';
import { assets } from '../../assets/admin_assets/assets';
import { assets as asset } from '../../assets/frontend_assets/assets';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {

  const [menu, setMenu] = useState("home");

  const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <div className='navbar'>
     <Link to='/'> <img src = {assets.logo} alt = "" className='logo'/> </Link> 
      <ul className='navbar-menu'>
        <Link to='/' onClick={() => setMenu("home")} className={menu==="home"?"active":""}>Home</Link>
        <a href='#explore-menu' onClick={() => setMenu("menu")}className={menu==="menu"?"active":""}>Menu</a>
        <a href='#app-download' onClick={() => setMenu("mobile-app")}className={menu==="mobile-app"?"active":""}>Mobile-app</a>
        <a href='#footer' onClick={() => setMenu("contact")}className={menu==="contact"?"active":""}>Contact</a>
      </ul>
     <div className='navbar-right'>
      <img src={asset.search_icon} alt=''/>
      <div className='navbar-search-icon'>
        <Link to='/cart' >
        <img src={asset.basket_icon} alt='' /> </Link>
        <div className={getTotalCartAmount()===0?"":"dot"}></div>
      </div>
      <button onClick={() => setShowLogin(true) }>Sign In</button>
     </div>
    </div>
  )
}

export default Navbar;
