const express = require('express');
const fs = require('fs');
const router = express.Router();
const videoList = require('../data/video-details.json');

router.get('/', (req, res, next) => {
  res.send(
    videoList.map(video => {
      return {
        id: video.id,
        title: video.title,
        channel: video.channel,
        image: video.image,
      }
    })
  )
})

module.exports = router;