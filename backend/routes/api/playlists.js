const express = require('express');
const asyncHandler = require('express-async-handler');
const db = require('../../db/models');

const { User, Song, Playlist, Playlist_Song } = require('../../db/models');



const router = express.Router();


router.get("/:userId", asyncHandler (async (req, res) => {
    const userId = req.params.userId;
    const playlists = await Playlist.findAll({
        where: {userId},
        include: {
            model: Song,
            as: "songs"
        }
    })
    return res.json(playlists)
}))

router.post("/upload", asyncHandler (async (req, res) => {
    const { name, userId } = req.body;
    const newPlaylist = await Playlist.create({
        name,
        userId

    })

    return res.json(newPlaylist)

}))

router.post("/:playlistId/:songId", asyncHandler (async (req, res) => {
    const { playlistId, songId } = req.params


    const newSongInPlaylist = await Playlist_Song.create({
        playlistId, songId
    })


    const playlist = await Playlist.findOne({
        where: {
            id: playlistId
        },
        include: {
            model: Song,
            as: "songs"
        }
    })
    return res.json(playlist)

}))

router.delete("/:id", asyncHandler (async (req, res) => {
    const id = req.params.id

    const playlistSongs = await Playlist_Song.findAll({
        where: {
            playlistId: id
        }
    })
    const playlist = await Playlist.findByPk(id)


    for (let i = 0; i < playlistSongs.length; i++){
       await playlistSongs[i].destroy()
    }

    await playlist.destroy()
    return res.json(playlist)
}))










module.exports = router
