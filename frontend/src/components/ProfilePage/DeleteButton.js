import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { NavLink } from "react-router-dom";
import * as trackActions from '../../store/tracks'
import './ProfilePage.css';
import { deletePlaylistThunk } from "../../store/playlists";

function DeleteButton({ playlist }) {

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

      const deletePlaylist = (e) => {
        e.preventDefault();
        dispatch(deletePlaylistThunk(playlist.id));

      };

      return (
          <>
            <button onClick={openMenu} className="delete-button">
                <i className="fa fa-light fa-sliders"></i>
            </button>
            {showMenu && (
                <ul className="delete-buttons-list">
                    <li>
                        <button onClick={deletePlaylist} className="edit-buttons">Delete</button>
                    </li>

              </ul>
            )}
          </>
      );
}

export default DeleteButton;
