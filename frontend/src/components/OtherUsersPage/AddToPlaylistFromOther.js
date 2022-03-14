import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

import { addPlaylistThunk, addSongToPlaylistThunk } from '../../store/playlists'
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

    const userPlaylists = []

    for (let i = 0; i < playlists.length; i++){
        if (playlists[i].userId == sessionUser.id){
            userPlaylists.push(playlists[i])
        }
    }



    return (
        <>
            <button onClick={openMenu} className="edit-button2">
                <i class="fa-thin fa-plus fa-2xl"></i>
            </button>
            {showMenu && (
                <ul className="edit-buttons-list">
                    {userPlaylists.map((playlist) => (
                        <li>
                            <button className="edit-buttons2" onClick={async e => {
                                e.preventDefault()
                                await dispatch(addSongToPlaylistThunk({ playlistId: playlist.id, songId: track.id }))
                                    .catch(async (res) => {
                                        return
                                    })
                                history.push("/")
                            }}>
                                {playlist.name}
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
                    className="new-playlist-input"
                    type="text"
                    value={newName}
                    onChange={e => setNewName(e.target.value)}
                    required
                />
                <button
                onClick={async e => {
                    e.preventDefault()
                    const newPlaylist = await dispatch(addPlaylistThunk({ name: newName, userId: sessionUser.id }))
                    await dispatch(addSongToPlaylistThunk({playlistId: newPlaylist.id, songId: track.id }))
                .catch(async (res) => {
                        return
                    })
                    history.push("/")
                    setInput(false)
                }}
                onBlur={e => setInput(!input)}
                >Submit</button>
            </div>
            )}
        </>
    );
}


export default AddToPlaylistFromOther
