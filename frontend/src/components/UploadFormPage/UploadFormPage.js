import { useEffect, useState } from "react";
import * as trackActions from "../../store/tracks";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom"

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
        console.log("AAAAAAAAAAAAAAAA")
        history.push("/")
    }

    return (
        <form className="upload-form" onSubmit={handleSubmit}>
            <ul>
                {errors.map((error) =>
                <li>{error}</li>
                )}
            </ul>
            <input
            className="upload-input"
            type="text"
            placeholder="Name"
            value={name}
            onChange={e=>setName(e.target.value)}
            required
            />
            <input
            className="upload-input"
            type="text"
            placeholder="ArtWork URL"
            value={art}
            onChange={e=>setArt(e.target.value)}
            required
            />
            <input
            className="upload-input"
            type="text"
            placeholder="Song URL"
            value={song}
            onChange={e=>setSong(e.target.value)}
            required
            />

            <button className="signup-button">
                Upload
            </button>
        </form>
    )
}

export default UploadFormPage
