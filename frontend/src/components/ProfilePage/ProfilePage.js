import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"

import { getTracksThunk } from "../../store/tracks"
import { getUsersThunk } from "../../store/users"
import { getPlaylistsThunk } from "../../store/playlists"
import { getAllTracksThunk } from "../../store/tracks"


import "./ProfilePage.css"

import EditButton from "./EditButton"
import AddToPlaylist from "./AddToPlaylist"
import DeleteButton from "./DeleteButton"

function ProfilePage({ user }) {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTracksThunk(user.id))
    }, [user, dispatch])

    useEffect(() => {
        dispatch(getUsersThunk(user.id))
    }, [user, dispatch])

    useEffect(() => {
        dispatch(getPlaylistsThunk(user.id))
    }, [dispatch])

    useEffect(() => {
        dispatch(getAllTracksThunk())
    }, [user, dispatch])


    const allTracks = useSelector(state => state.tracks)
    const trackArrayObj = Object.values(allTracks)
    const trackArr = Object.values(trackArrayObj)

    const userTrackArr = []
    for (let i = 0; i < trackArr.length; i++){
        let track = trackArr[i]
        if (track.userId === user.id){
            userTrackArr.push(track)
        }
    }

    const otherUsers = useSelector(state => state.users)
    const userArrayObj = Object.values(otherUsers)
    const userArr = Object.values(userArrayObj)

    const userPlaylistsObject = useSelector(state => state.playlists)
    const userPlaylists = Object.values(userPlaylistsObject)


    const [menu, setMenu] = useState(true)

    //get all songs from db and change "trackArr" in line 105 to an array of all songs. trackArr is an array of user's songs


    return (
        <>
            <body className="profile-body">
                <div className="upper-profile">
                    <img src={user.profilePic} className="profile-pic" alt="profile" />
                    <h2 className="username">{user.fullName}</h2>
                </div>
                <div className="mid-profile">
                    <ul className="profile-tabs">
                        <li>
                            <button className="profile-tab-button" onClick={(e) => setMenu(true)}>Tracks</button>
                        </li>
                        <li>
                            <button className="profile-tab-button" onClick={(e) => setMenu(false)}>Playlists</button>
                        </li>
                    </ul>
                    <div>
                        {menu && (
                            <ul>{userTrackArr.map((obj) => (
                                <div className="track-list">
                                    <li className="track-name">{obj.name}</li>
                                    <audio className="track-controls" controls src={obj.songFile}></audio>
                                    <EditButton track={obj} />
                                    <AddToPlaylist track={obj} playlists={userPlaylists}/>
                                </div>
                            ))}</ul>
                        )}
                    </div>
                    <div>
                        {!menu && (
                            <ul className="unordered-playlists">{userPlaylists.map((playlist) => (
                                <div className="playlist-list">
                                    <div className="playlist-name">{playlist?.name}</div>{
                                        Object.values(playlist?.songs).map((song) => (
                                            <div className="playlist-div">
                                                <img className="playlist-image" src={song?.artWork}></img>
                                                <li className="playlist-songname">{song?.name}</li>
                                            </div>
                                        ))
                                }
                                    <div className="delete-button">
                                        <DeleteButton playlist={playlist}/>
                                    </div>
                                </div>

                            ))}</ul>
                        )}
                    </div>
                </div>
                <div className="side-profile">
                    <h2 className="side-title">Explore</h2>
                    <ul className="other-users-list">{userArr.map((otherUserx) => (
                        (otherUserx.username !== user.username) && (
                            <div className="other-users-item">
                                <img className="other-users-image" alt="other-user" src={otherUserx.profilePic}></img>
                                <li className="other-users-name">{otherUserx.fullName}
                                    <li className="other-username">{otherUserx.username}</li>
                                </li>
                                <button className="other-users-button">
                                    <NavLink to={{ pathname: `/users/${otherUserx.id}`, otherUserProps: { otherUserx }, userPlaylistx: {userPlaylists} }}
                                        style={{
                                            textDecoration: 'none', color: "#f50",
                                            fontFamily: "'Assistant', sans-serif",
                                            letterSpacing: "0.5px", fontSize: "15px"
                                        }}>
                                        View profile</NavLink>
                                </button>
                            </div>
                        )
                    ))}</ul>
                </div>
                <div className="lower-profile">
                    <button className="upload-button">
                        <NavLink to="/upload" style={{
                            textDecoration: 'none', color: 'white',
                            fontFamily: "'Assistant', sans-serif", letterSpacing: "0.5px", fontSize: "15px"
                        }}>
                            Upload Song
                        </NavLink>
                    </button>
                </div>
            </body>
        </>
    )
}

export default ProfilePage
