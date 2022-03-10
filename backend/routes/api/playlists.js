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











module.exports = router
