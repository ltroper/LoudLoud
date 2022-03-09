import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as trackActions from '../../store/tracks'
import './ProfilePage.css';


function EditButton({ track }) {

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

      //add delete and edit

      const deleteTrack = (e) => {
        e.preventDefault();
        dispatch(trackActions.deleteTrackThunk(track));
      };

      return (
          <>
            <button onClick={openMenu} className="edit-button">
                <i className="fa fa-light fa-sliders"></i>
            </button>
            {showMenu && (
                <ul className="edit-buttons-list">
                    <li>
                        <button className="edit-buttons">Edit name</button>
                    </li>
                    <li>
                        <button onClick={deleteTrack} className="edit-buttons">Delete track</button>
                    </li>

              </ul>
            )}
          </>
      );
}

export default EditButton;
