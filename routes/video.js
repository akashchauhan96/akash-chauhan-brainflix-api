const express = require('express');
const fs = require('fs');
const router = express.Router();
const videoList = require('../data/video-details.json');

router.get('/', (req, res) => {
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

router.get('/:id', (req, res) => {
  const selectedVidId = req.params.id;
  res.send(
    videoList.find(selectedVid => {
      return selectedVidId === selectedVid.id;
    })
  )
})

module.exports = router;