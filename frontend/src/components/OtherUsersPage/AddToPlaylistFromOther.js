import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

import { addToPlaylistThunk } from '../../store/playlists'
import { getPlaylistsThunk } from "../../store/playlists";
import '../ProfilePage/ProfilePage.css';

function AddToPlaylistFromOther({ track, playlists }) {


    const sessionUser = useSelector(state => state.session.user);

    const [input, setInput] = useState(false)
    const [newName, setNewName] = useState("")


    let history = useHistory()

    const dispatch = useDispatch();

    const [showMenu, setShowMenu] = useState(false);
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

    const openInput = () => {
        if (input) return;
        setInput(true)
    };

    useEffect(() => {
        if (!input) return;

        const closeInput = () => {
            setInput(false);
        };

        return () => document.removeEventListener("click", closeInput);
    }, [input]);


    const userPlaylists = useSelector(state => state.playlists)
    const playArrObj = Object.values(userPlaylists)
    const playlistArr = Object.values(playArrObj)
    const playlistNames = new Set()

    playlistArr.forEach(playlist => {
        playlistNames.add(playlist.name)
    })

    let playlistNamesArray = [...playlistNames];


    return (
        <>
            <button onClick={openMenu} className="edit-button2">
                <i class="fa-thin fa-plus fa-2xl"></i>
            </button>
            {showMenu && (
                <ul className="edit-buttons-list">
                    {playlists.map((nameOfP) => (
                        <li>
                            <button className="edit-buttons2" onClick={async e => {
                                e.preventDefault()
                                await dispatch(addToPlaylistThunk({ name: nameOfP, userId: sessionUser.id, songId: track.id }))
                                    .catch(async (res) => {
                                        const data = await res.json();
                                        if (data && data.errors) setErrors(data.errors)
                                    })
                                history.push("/")
                            }}>
                                {nameOfP}
                            </button>
                        </li>
                    ))}
                    <li>
                        <button onClick={e => setInput(!input)} className="edit-buttons">
                            New Playlist
                        </button>

                    </li>

                </ul>
            )}
            {input && (
                <div>
                    <input
                        onBlur={e => setInput(!input)}
                        className="new-playlist-input"
                        type="text"
                        value={newName}
                        onChange={e => setNewName(e.target.value)}
                        required
                    />
                    <button onClick={async e => {
                        e.preventDefault()
                        await dispatch(addToPlaylistThunk({ name: newName, userId: sessionUser.id, songId: track.id }))
                            .catch(async (res) => {
                                const data = await res.json();
                                if (data && data.errors) setErrors(data.errors)
                            })
                        history.push("/")
                    }}>Submit</button>
                </div>
            )}
        </>
    );
}


export default AddToPlaylistFromOther
