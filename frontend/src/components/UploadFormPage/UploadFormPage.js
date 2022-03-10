import { useEffect, useState } from "react";
import * as trackActions from "../../store/tracks";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom"

import "./Forms.css"


const UploadFormPage = ({user}) =>{

    const dispatch = useDispatch()

    let history = useHistory()

    const [name, setName] = useState("")
    const [art, setArt] = useState("")
    const [song, setSong] = useState("")

    const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) =>{
        e.preventDefault()
        await dispatch(trackActions.uploadTrackThunk({name, userId: user.id, artWork: art, songFile: song}))
        .catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors)
        })
        history.push("/")
    }

    return (
    <>
        <h1 className="form-title">Upload to LoudLoud</h1>
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
            <label className="form-label">Song File</label>
            <input
            className="upload-input"
            type="text"
            placeholder="Song URL"
            value={song}
            onChange={e=>setSong(e.target.value)}
            required
            />

            <button className="signup-button button">
                Upload
            </button>
        </form>
    </>
    )
}

export default UploadFormPage
