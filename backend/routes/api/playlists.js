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











module.exports = router
