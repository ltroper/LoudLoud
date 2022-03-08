import { useState } from "react"

import "./ProfilePage.css"


function ProfilePage({ user }) {

    const [menu, setMenu] = useState(true)

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
                    <div>Tracks(Placeholder)</div>
                    <div>Playlists(Placeholder)</div>
                </div>
                <div className="lower-profile">
                    <button className="upload-button">Upload a song</button>
                </div>
            </body>
        </>
    )
}

export default ProfilePage
