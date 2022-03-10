import { csrfFetch } from "./csrf"

const GET_PLAYLISTS = "playlists/profile"
const ADD_PLAYLISTS = "playlists/add"

const getPlaylists = (playlists) => {
    return {
        type: GET_PLAYLISTS,
        playlists
    }
}

const addPlaylists = (playlists) => {
    return {
        type: ADD_PLAYLISTS,
        playlists
    }
}

export const getPlaylistsThunk = (userId) => async (dispatch) => {

    const res = await csrfFetch(`/api/playlists/${userId}`);

    const data = await res.json()
    dispatch(getPlaylists(data))
}

export const addToPlaylistThunk = (playlist) => async (dispatch) => {
    const { name, userId, songId } = playlist;
    const res = await csrfFetch(`/api/playlists/upload`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name,
            userId,
            songId
        }),
    });

    const data = await res.json()
    dispatch(addPlaylists(data))
}


const initialState = {}

const playlistReducer = (state = initialState, action) => {
    let newState = {}
    switch (action.type) {
        case GET_PLAYLISTS: {
            newState = {}
            const arr = action.playlists
            for (let i = 0; i < arr.length; i++) {
                newState[i] = arr[i]
            }

            return newState
        }
        case ADD_PLAYLISTS: {
            newState = {...state}
            console.log(action)
            newState[action.playlists.name] = action.playlists
            return newState

        }
        default: return state;
    }

}

export default playlistReducer
