import React from "react";
import "./header.css";

const Header = () => {
  return(
    <div className='header'>
      <div className="headerTitles">
        <span className="headerTitleSm">Breweries</span>
        <span className="headerTitleLg">List</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/1267700/pexels-photo-1267700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt=""
      />
    </div>
  )
}

export default Header;