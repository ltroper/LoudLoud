import { csrfFetch } from "./csrf"

const GET_PLAYLISTS = "playlists/profile"

const getPlaylists = (playlists) => {
    return {
        type: GET_PLAYLISTS,
        playlists
    }
}

export const getPlaylistsThunk = (userId) => async (dispatch) => {

    const res = await csrfFetch(`/api/playlists/${userId}`);

    const data = await res.json()
    dispatch(getPlaylists(data))
}


const initialState = {}

const playlistReducer = (state = initialState, action) => {
    let newState = {}
    switch (action.type) {
        case GET_PLAYLISTS: {
            newState = {...state}
            const arr = action.playlists
            for (let i = 0; i < arr.length; i++){
                newState[i] = arr[i]
            }
            // arr.forEach(playlist => {
            //     newState[playlist.id] = playlist
            // });
            return newState
        }
        default: return state;
    }

}

export default playlistReducer
