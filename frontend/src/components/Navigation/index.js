import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import logo from '../../media/logoPro.png'



function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);


  return (
    <ul>
      <li className='nav-bar'>
        <NavLink exact to="/" >
          <img className='logo-splash2' src={logo} alt="logo" />
        </NavLink>
        <div className='profile-splash'>
          <ProfileButton user={sessionUser} />
        </div>
      </li>
    </ul>
  );
}

export default Navigation;
