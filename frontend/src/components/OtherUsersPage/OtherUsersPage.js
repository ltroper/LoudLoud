import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { getTracksThunk } from "../../store/tracks"
import { getUsersThunk } from "../../store/users"
import { getPlaylistsThunk } from "../../store/playlists"
import { getAllTracksThunk } from "../../store/tracks"
import { getAllLikesThunk } from "../../store/likes"

import "../ProfilePage/ProfilePage.css"
import { NavLink, useParams, useLocation } from "react-router-dom"

import AddToPlaylistFromOther from "./AddToPlaylistFromOther"


function OtherUsersPage({ user }) {

    let location = useLocation()
    let userId = useParams()


    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getUsersThunk(user?.id))
    },[user, dispatch])


    const sessionUser = useSelector(state=>state.session.user)

    const otherUsers = useSelector(state=>state.users)
    let otherUser = otherUsers[userId?.userId]

    useEffect(() => {
        dispatch(getAllLikesThunk(sessionUser?.id))
    }, [dispatch])

    useEffect(()=> {
        dispatch(getTracksThunk(otherUser?.id))
    },[otherUser, dispatch])

    useEffect(() => {
        dispatch(getPlaylistsThunk(otherUser?.id))
        dispatch(getPlaylistsThunk(sessionUser.id))
    },[otherUser, dispatch])


    useEffect(() => {
        dispatch(getAllTracksThunk())
    }, [user, dispatch])



    const allTracks = useSelector(state => state.tracks)
    const trackArrayObj = Object.values(allTracks)
    const trackArr = Object.values(trackArrayObj)

    const otherUserTrackArr = []
    for (let i = 0; i < trackArr.length; i++){
        let track = trackArr[i]
        if (track.userId === otherUser.id){
            otherUserTrackArr.push(track)
        }
    }


    const userArrayObj = Object.values(otherUsers)
    const userArr = Object.values(userArrayObj)

    const userPlaylistsObject = useSelector(state => state.playlists)
    const anotherUserPlaylists = Object.values(userPlaylistsObject)

    let otherUserPlaylists = []
    let sessionUserPlaylists = []

    anotherUserPlaylists.forEach(playlist => {
        if(playlist.userId == userId.userId){
            otherUserPlaylists.push(playlist)
        }
        else {
            sessionUserPlaylists.push(playlist)
        }
    })


    const [menu, setMenu] = useState(true)



    return (
        <>
            <body className="profile-body">
                <div className="upper-profile">
                    <img src={otherUser?.profilePic} className="profile-pic"/>
                    <h2 className="username">{otherUser?.fullName}</h2>
                </div>
                <div className="mid-profile">
                    <ul className="profile-tabs">
                        <li>
                            <button className="profile-tab-button" onClick={(e)=>setMenu(true)}>Tracks</button>
                        </li>
                        <li>
                            <button className="profile-tab-button" onClick={(e)=>setMenu(false)}>Playlists</button>
                        </li>
                    </ul>
                    <div>
                    {menu && (
                        <ul>{otherUserTrackArr?.map((obj)=>(
                            <div className="track-list">
                                <li className="track-name">{obj.name}</li>
                                <audio className="track-controls" controls src={obj.songFile}></audio>
                                <button
                                className="like-button"
                                 >
                                    <i className={"fa fa-regular fa-heart fa-lg"}></i>
                                </button>
                                <AddToPlaylistFromOther track={obj} playlists={sessionUserPlaylists}/>
                            </div>
                        ))}</ul>
                    )}
                    </div>
                    <div>
                    {!menu && (
                       <ul className="unordered-playlists">{otherUserPlaylists.map((playlist) => (
                        <div className="playlist-list">
                            <div className="playlist-name">{playlist.name}</div>{
                             Object.values(playlist?.songs).map((song) => (
                                <div className="playlist-div">
                                    <img className="playlist-image" src={song?.artWork}></img>
                                    <li className="playlist-songname">{song?.name}</li>
                                </div>
                            ))
                        }</div>
                    ))}</ul>
                )}

                    </div>
                </div>
                <div className="side-profile">
                    <h2 className="side-title">Explore</h2>
                    <ul className="other-users-list">{userArr.map((otherUserx)=>(
                        (otherUserx.username !== user.username) && (otherUserx.username !== otherUser.username) &&(
                            <div className="other-users-item">
                                <img className="other-users-image" alt="other-user" src={otherUserx.profilePic}></img>
                                <li className="other-users-name">{otherUserx.fullName}
                                    <li className="other-username">{otherUserx.username}</li>
                                </li>
                                <button className="other-users-button">
                                <NavLink to={{pathname:`/users/${otherUserx.id}`}}
                                    style={{ textDecoration: 'none', color:"#f50",
                                    fontFamily: "'Assistant', sans-serif",
                                    letterSpacing: "0.5px", fontSize: "15px"}}>
                                        View profile</NavLink>
                                </button>
                            </div>
                        )
                    ))}</ul>
                </div>
                <div className="lower-profile">

                </div>
            </body>
        </>
    )
}

export default OtherUsersPage
