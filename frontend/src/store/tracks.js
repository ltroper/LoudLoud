import { csrfFetch } from "./csrf"

const GET_TRACKS = "tracks/profile"

const getTracks = (tracks) => {
    return {
        type: GET_TRACKS,
        tracks
    }
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

        default: return state;
    }

}

export default tracksReducer
