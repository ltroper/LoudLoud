import { csrfFetch } from "./csrf"

const GET_TRACKS = "tracks/profile"
const UPLOAD_TRACK = "tracks/upload"
const DELETE_TRACK = "tracks/delete"
const GET_ALLTRACKS = "songs/all"
const UPDATE_TRACK = "songs/update"

const getTracks = (tracks) => {
    return {
        type: GET_TRACKS,
        tracks
    }
}

const getAllTracks = (songs) => {
    return {
        type: GET_ALLTRACKS,
        songs
    }
}

const uploadTrack = (track) => {
    return {
        type: UPLOAD_TRACK,
        track
    }
}

const deleteTrack = (trackId) => {
    return {
        type: DELETE_TRACK,
        trackId
    }
}

const updateTrack = (track) => {
    return {
        type: UPDATE_TRACK,
        track
    }
}

export const updateTrackThunk = (track) => async (dispatch) => {
    const {name, artWork, songFile, trackId} = track

    const res = await csrfFetch(`/api/tracks/update/${trackId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name,
            artWork,
            songFile
        }),
    })
    const data = await res.json()
        dispatch(updateTrack(data))
}

export const deleteTrackThunk = (trackId) => async (dispatch) => {
    const res = await csrfFetch(`/api/tracks/delete/${trackId}`, {
        method: "DELETE"

    })
    const data = await res.json()
    dispatch(deleteTrack(data));
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

export const getAllTracksThunk = () => async (dispatch) => {

    const res = await csrfFetch(`/api/tracks/all`);
    const data = await res.json()
    dispatch(getAllTracks(data))
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
        case GET_ALLTRACKS: {
            newState = {...state}
            action.songs.forEach(song => {
                newState[song.id] = song
            });
            return newState;
        }
        case UPLOAD_TRACK: {
            newState = {...state}
            newState[action.track.id] = action.track
            return newState
        }
        case UPDATE_TRACK: {
            newState = {...state}
            newState[action.track.id] = action.track
            return newState
        }
        case DELETE_TRACK: {
            newState = {...state}
            delete newState[action.trackId.id]
            return newState
        }

        default: return state;
    }

}

export default tracksReducer
