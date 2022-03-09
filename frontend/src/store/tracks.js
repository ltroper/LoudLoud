import { csrfFetch } from "./csrf"

const GET_TRACKS = "tracks/profile"
const UPLOAD_TRACK = "tracks/upload"
const DELETE_TRACK = "tracks/delete"

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

const deleteTrack = (track) => {
    return {
        type: DELETE_TRACK,
        track
    }
}

export const deleteTrackThunk = (track) => async (dispatch) => {
    const trackId = track.id
    const res = await csrfFetch(`/api/tracks/delete/${trackId}`, {
        method: "DELETE"

    })
    dispatch(deleteTrack());
    return res
}

export const uploadTrackThunk = (track) => async (dispatch) => {
    const {name, userId, artWork, songFile} = track
    const res = await csrfFetch(`/api/tracks/upload`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name,
            userId,
            artWork,
            songFile
        }),
    });

        const data = await res.json()
        dispatch(uploadTrack(data))
}

export const getTracksThunk = (userId) => async (dispatch) => {

    const res = await csrfFetch(`/api/tracks/${userId}`);

    const data = await res.json()
    dispatch(getTracks(data))
}


const initialState = {}

const tracksReducer = (state = initialState, action) => {
    let newState = {}
    switch (action.type) {
        case GET_TRACKS: {
            newState = {...state}
            action.tracks.forEach(track => {
                newState[track.id] = track
            });
            return newState;
            }
        case UPLOAD_TRACK: {
            newState = {...state}
            newState[action.track.id] = action.track
            return newState
        }
        case DELETE_TRACK: {
            newState = {...state}
            newState[action.track] = null
            return newState
        }

        default: return state;
    }

}

export default tracksReducer
