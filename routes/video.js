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
  const selectedVideo = videoList.find(videoId => {
    return selectedVidId === videoId.id;
  });
  if(selectedVideo === undefined) {
    res.status(404).send("ID could not be located");
  }
  else {
    res.send(selectedVideo);
  }
})

module.exports = router;