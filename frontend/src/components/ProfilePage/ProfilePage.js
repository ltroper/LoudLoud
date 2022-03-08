import { useState, useEffect } from "react"
import { getTracksThunk } from "../../store/tracks"
import { useDispatch, useSelector } from "react-redux"

import "./ProfilePage.css"


function ProfilePage({ user }) {

    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getTracksThunk(user.id))
    },[user, dispatch])

    const userTracks = useSelector(state=>state.tracks)
    const [menu, setMenu] = useState(true)


    const trackArrayObj = Object.values(userTracks)
    const trackArr = Object.values(trackArrayObj)
    console.log(trackArr)
    trackArr.forEach(obj=>{
        console.log(obj.name)
    })


    return (
        <>
            <body className="profile-body">
                <div className="upper-profile">
                    <img src={user.profilePic} className="profile-pic"/>
                    <h2 className="username">{user.fullName}</h2>
                </div>
                <div className="mid-profile">
                    <ul className="profile-tabs">
                        <li>
                            <button className="profile-tab-button" onClick={e=>setMenu(true)}>Tracks</button>
                        </li>
                        <li>
                            <button className="profile-tab-button" onClick={e=>setMenu(false)}>Playlists</button>
                        </li>
                    </ul>
                    <div>
                    {menu && (
                        <ul>{trackArr.forEach((obj)=>(
                            <li>{obj.name}</li>
                        ))}</ul>
                    )}
                    </div>
                    <div>
                    {!menu && (
                        <div>Playlists</div>
                    )}
                    </div>
                </div>
                <div className="lower-profile">
                    <button className="upload-button">Upload a song</button>
                </div>
            </body>
        </>
    )
}

export default ProfilePage
