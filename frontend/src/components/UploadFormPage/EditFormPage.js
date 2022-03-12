import { useEffect, useState } from "react";
import * as trackActions from "../../store/tracks";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router-dom"
import { useLocation} from "react-router-dom"

import "./Forms.css"

const EditFormPage = ({user}) =>{
    let location = useLocation()

    let track = location.userProps.track
    const dispatch = useDispatch()

    let history = useHistory()

    const { trackId } = useParams()

    const [name, setName] = useState(track.name)
    const [art, setArt] = useState(track.artWork)
    const [song, setSong] = useState(track.songFile)

    const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) =>{
        e.preventDefault()
        dispatch(trackActions.updateTrackThunk({name, artWork: art, songFile: song, trackId}))
        .catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors)
        })
        history.push("/")
    }

    return (
       <>
        <h1 className="form-title">Edit your Track</h1>
        <form className="upload-form" onSubmit={handleSubmit}>

            <label className="form-label">Name</label>
            <input
            className="upload-input"
            type="text"
            placeholder="Name"
            value={name}
            onChange={e=>setName(e.target.value)}
            required
            />
            <label className="form-label">ArtWork</label>
            <input
            className="upload-input"
            type="text"
            placeholder="ArtWork URL"
            value={art}
            onChange={e=>setArt(e.target.value)}
            required
            />
            <label className="form-label">SongFile</label>
            <input
            className="upload-input"
            type="text"
            placeholder="Song URL"
            value={song}
            onChange={e=>setSong(e.target.value)}
            required
            />

            <button className="signup-button button">
                Confirm
            </button>
        </form>
       </>
    )
}

export default EditFormPage
