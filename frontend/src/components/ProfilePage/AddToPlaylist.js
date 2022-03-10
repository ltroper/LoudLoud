import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from "react-router-dom";
import { addToPlaylistThunk } from '../../store/playlists'
import './ProfilePage.css';

function AddToPlaylist({ track, playlists }) {


    const sessionUser = useSelector(state => state.session.user);

    let history = useHistory()

    const dispatch = useDispatch();

    const [showMenu, setShowMenu] = useState(false);
    const [name, setName] = useState("")
    const [errors, setErrors] = useState([])

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

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(name)
        await dispatch(addToPlaylistThunk({ name, userId: sessionUser.id, songId: track.id }))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors)
            })
        history.push("/")
    }

    const submitFunction = (funcName) => {
        setName(funcName);
        handleSubmit()
    }


    return (
        <>
            <button onClick={openMenu} className="edit-button2">
                <i class="fa-thin fa-plus fa-2xl"></i>
            </button>
            {showMenu && (
                <ul className="edit-buttons-list">
                    {playlists.map((nameOfP) => (
                        <li>
                            <button className="edit-buttons2" onClick={e => submitFunction(nameOfP)}>
                                {nameOfP}
                            </button>
                        </li>
                    ))}
                    <li>
                        <button className="edit-buttons">
                            New Playlist
                        </button>
                    </li>

                </ul>
            )}
        </>
    );
}


export default AddToPlaylist
