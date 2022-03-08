import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);


  return (
    <ul>
      <li className='nav-bar'>
        <NavLink exact to="/" className="nav-bar-ele">Home</NavLink>
        <ProfileButton user={sessionUser} />
      </li>
    </ul>
  );
}

export default Navigation;
