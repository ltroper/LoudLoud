import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import './Navigation.css';


function ProfileButton({ user }) {

    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true)
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
          setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
      }, [showMenu]);

      const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
      };

      return (
          <>
            <button onClick={openMenu} className="nav-bar-ele">
                <i className="fa-solid fa-user"></i>
            </button>
            {showMenu && (
                <ul>
                <li className="navbar-ele">{user.username}</li>
                <li className="navbar-ele little">{user.email}</li>
                <li className="navbar-ele">
                  <button onClick={logout}
                  className="navbar-ele-button"
                  >Log Out</button>
                </li>
              </ul>
            )}
          </>
      );
}

export default ProfileButton;
