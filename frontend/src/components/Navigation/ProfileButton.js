import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import * as sessionActions from '../../store/session';
import './Navigation.css';


function ProfileButton({ user }) {

  const history = useHistory()

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
        history.push("/")
      };

      return (
          <>
            <button onClick={openMenu} className="nav-bar-ele">
                <i className="fa-solid fa-user fa-2xl"></i>
            </button>
            {showMenu && (
                <ul className="drop-down-nav">
                <li className="navbar-ele">{user.username}
                  <li className="little">{user.email}</li>
                </li>
                <li>
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
