import { csrfFetch } from "./csrf"

const GET_PLAYLISTS = "playlists/profile"
const ADD_PLAYLISTS = "playlists/add"
const DELETE_PLAYLIST = "playlists/delete"
const ADD_SONG_TOPLAY = "playlist/addSong"

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

const addSongToPlaylist = (playlist) => {
    return {
        type: ADD_SONG_TOPLAY,
        playlist
    }
}

const deletePlaylist = (playlistName) => {
    return {
        type: DELETE_PLAYLIST,
        playlistName
    }
}

export const deletePlaylistThunk = (playlistName) => async (dispatch) => {
    const res = await csrfFetch(`/api/playlists/delete/${playlistName}`, {
        method: "DELETE"

    })
    const data = await res.json()
    dispatch(deletePlaylist(data));
}

export const getPlaylistsThunk = (userId) => async (dispatch) => {

    const res = await csrfFetch(`/api/playlists/${userId}`);

    const data = await res.json()
    dispatch(getPlaylists(data))

}

export const addSongToPlaylistThunk = (playlistId, songId) => async (dispatch) => {
    const res = await csrfFetch(`/api/playlists/upload`, {
        method: "POST",
        headers: { "Content-Type": "application/json" }
    })

    if (res.ok) {
        const playlist = await res.json()
        dispatch(addSongToPlaylist(playlist))
    }
}

export const addPlaylistThunk = (playlist) => async (dispatch) => {
    const { name, userId } = playlist;
    const res = await csrfFetch(`/api/playlists/upload`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            name,
            userId,
        }),
    });

    const data = await res.json()
    dispatch(addPlaylists(data))
}


const initialState = {}

const playlistReducer = (state = initialState, action) => {

    let solutionToMyProblems
    switch (action.type) {
        case GET_PLAYLISTS: {
            const newState = JSON.parse(JSON.stringify(state))
            // console.log("STATE", newState)
            // console.log("ACTION", action)
            action.playlists.forEach(playlist => {
                newState[playlist.id] = playlist
            });
            return newState
        }
        case ADD_SONG_TOPLAY: {
            const newState = JSON.parse(JSON.stringify(state))
        }
        case ADD_PLAYLISTS: {
            const newState = JSON.parse(JSON.stringify(state))
            solutionToMyProblems = Object.keys(newState)
            newState[solutionToMyProblems.length] = action.playlists
            return newState
        }
        case DELETE_PLAYLIST: {
            const newState = JSON.parse(JSON.stringify(state))
            const arr = Object.keys(newState)
            console.log(arr)
            console.log(newState)
            for (let i = 0; i < arr.length; i++){
                if (newState[i].name === arr[0].name){
                    delete newState[i]
                }
            }
            return newState
        }
        default: return state;
    }

}

export default playlistReducer
