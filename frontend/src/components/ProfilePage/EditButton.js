import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { NavLink } from "react-router-dom";
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


      const deleteTrack = (e) => {
        e.preventDefault();
        dispatch(trackActions.deleteTrackThunk(track.id));
      };

      return (
          <>
            <button onClick={openMenu} className="edit-button">
                <i className="fa fa-light fa-sliders"></i>
            </button>
            {showMenu && (
                <ul className="edit-buttons-list2">
                    <li>
                        <button className="edit-buttons">
                        <NavLink to={{pathname:`/edit/${track.id}`, userProps: {track}}} style={{ textDecoration: 'none', color: 'black'}}>
                            Edit track
                        </NavLink>
                        </button>
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
