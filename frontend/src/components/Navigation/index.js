import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import logo from '../../media/logoPro.png'
import SearchBar from './SearchBar';



function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);


  return (
    <ul>
      <li className='nav-bar'>
        <div>
          <NavLink exact to="/" >
            <img className='logo-splash2' src={logo} alt="logo" />
          </NavLink>
        </div>
        <SearchBar />
        <div className='profile-splash'>
          <ProfileButton className="profile-splash" user={sessionUser} />
        </div>
      </li>
    </ul>
  );
}

export default Navigation;
