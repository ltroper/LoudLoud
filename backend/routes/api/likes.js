const express = require('express');
const asyncHandler = require('express-async-handler');

const { User, Song, Playlist_Song, Like, Comment } = require('../../db/models');



const router = express.Router();

router.get("/:userId", asyncHandler (async (req, res) => {
    const userId = req.params.userId;
    const likes = await Like.findAll({
        where: {userId},
        attributes: ["id", "songId", "userId"]
    })
    return res.json(likes)
}))


router.post("/new", asyncHandler (async (req, res) => {
    const { userId, songId } = req.body
    const newLike = await Like.create({
        userId,
        songId
    })
    return res.json(newLike)
}))

router.delete("/delete/:likeId", asyncHandler (async (req, res) => {
    const id = req.params.likeId
    const like = await Like.findOne({
        where: {
            id
        },
        attributes: ["id", "songId", "userId"]
        })

    await like.destroy()
    return res.json(like)

}))

module.exports = router
