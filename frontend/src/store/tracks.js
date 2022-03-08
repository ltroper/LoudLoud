import { csrfFetch } from "./csrf"

const GET_TRACKS = "tracks/profile"
const UPLOAD_TRACK = "tracks/upload"

const getTracks = (tracks) => {
    return {
        type: GET_TRACKS,
        tracks
    }
}

const uploadTrack = (track) => {
    return {
        type: UPLOAD_TRACK,
        track
    }
}

export const uploadTrackThunk = (track) => async (dispatch) => {
    const {name, userId, artWork, songFile} = track
    const res = await csrfFetch(`/api/tracks/upload`, {
        method: "POST",
        body: JSON.stringify({
            name,
            userId,
            artWork,
            songFile
        }),
    });

        const data = await res.json()
        dispatch(uploadTrack(data.track))
}

export const getTracksThunk = (userId) => async (dispatch) => {

    const res = await csrfFetch(`/api/tracks/${userId}`);

    const data = await res.json()
    dispatch(getTracks(data))
}


const initialState = {}

const tracksReducer = (state = initialState, action) => {
    const newState = {}
    switch (action.type) {
        case GET_TRACKS: {
            action.tracks.forEach(track => {
                newState[track.id] = track
            });
            return newState;
            }
        case UPLOAD_TRACK: {
            newState[action.track.id] = action.track
            return newState
        }

        default: return state;
    }

}

export default tracksReducer
