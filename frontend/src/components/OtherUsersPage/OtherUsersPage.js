import { useState, useEffect } from "react"
import { getTracksThunk } from "../../store/tracks"
import { useDispatch, useSelector } from "react-redux"
import { getUsersThunk } from "../../store/users"
import "../ProfilePage/ProfilePage.css"
import { NavLink, useParams, useLocation } from "react-router-dom"


function OtherUsersPage({ user }) {

    let location = useLocation()

    let otherUser = location.otherUserProps.otherUserx

    const dispatch = useDispatch()


    useEffect(()=> {
        dispatch(getTracksThunk(otherUser.id))
    },[otherUser, dispatch])

    useEffect(()=>{
        dispatch(getUsersThunk(user.id))
    },[user, dispatch])


    const userTracks = useSelector(state=>state.tracks)

    const trackArrayObj = Object.values(userTracks)
    const trackArr = Object.values(trackArrayObj)

    const otherUsers = useSelector(state=>state.users)

    const userArrayObj = Object.values(otherUsers)
    const userArr = Object.values(userArrayObj)

    const [menu, setMenu] = useState(true)


    return (
        <>
            <body className="profile-body">
                <div className="upper-profile">
                    <img src={otherUser.profilePic} className="profile-pic"/>
                    <h2 className="username">{otherUser.fullName}</h2>
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
                        <ul>{trackArr.map((obj)=>(
                            <div className="track-list">
                                <li className="track-name">{obj.name}</li>
                                <audio className="track-controls" controls src={obj.songFile}></audio>
                                <button className="like-button">
                                    <i className={"fa fa-regular fa-heart fa-lg"}></i>
                                </button>
                            </div>
                        ))}</ul>
                    )}
                    </div>
                    <div>
                    {!menu && (
                        <div>Playlists</div>
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
                                <NavLink to={{pathname:`/users/${otherUserx.id}`, otherUserProps: {otherUserx}}}
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
