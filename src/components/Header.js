import React from 'react';
import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import '../styles/Header.css';

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <Avatar
          className="header__avatar"
          src="https://avatars1.githubusercontent.com/u/47897689?s=460&u=0bb395d093ce35cd806306d0c62b1d86aebfbaa1&v=4"
          alt="profile-pic"
        />
        <AccessTimeIcon />
      </div>
      <div className="header__search">
        <SearchIcon className="header__searchIcon" />
        <input placeholder="Search" type="text" />
      </div>
      <div className="header__right">
        <HelpOutlineIcon />
      </div>
    </div>
  );
}

export default Header;
