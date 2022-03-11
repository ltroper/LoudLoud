const express = require('express');
const asyncHandler = require('express-async-handler');

const { User, Song, Playlist } = require('../../db/models');



const router = express.Router();


router.get("/:userId", asyncHandler (async (req, res) => {
    const userId = req.params.userId;
    const playlists = await Playlist.findAll({
        where: {userId}
    })
    return res.json(playlists)
}))

router.post("/upload", asyncHandler (async (req, res) => {
    const { name, userId, songId } = req.body;
    const newPlaylist = await Playlist.create({
        name,
        userId,
        songId
    })

    return res.json(newPlaylist)

}))

router.post("/addSong", asyncHandler (async (req, res) => {
    const { playlistId, songId } = req.body
    const addPlaylist = await Playlist.findOne({
        where: {
            id: playlistId
        },
        inlcude: {
            Song,
        }

    })

    // const addSong = await Song.findByPk(songId)

    // addPlaylist.songs.push()
    console.log("PLAYLIST:  ", addPlaylist)
    return res.json({test: "test"})

}))

router.delete("/delete/:name", asyncHandler (async (req, res) => {
    const name = req.params.name
    const song = await Playlist.findAll({
        where:{
            name
        }
    })


    song.forEach(element => {
        console.log(element)
        element.destroy()
    });

    return res.json(song)
}))










module.exports = router
