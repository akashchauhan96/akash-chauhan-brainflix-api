const express = require('express');
const fs = require('fs');
const router = express.Router();
const videoList = require('../data/video-details.json');
const path = require('path');
const { uuid } = require('uuidv4');


const videoFilePath = path.join(__dirname, '../data/video-details.json');

const readFile = () => {
  return JSON.parse(fs.readFileSync(videoFilePath))
}

const createNewVidList = (newVidArray) => {
  fs.writeFileSync(videoFilePath, JSON.stringify(newVidArray))
}

router
  .route("/")
  .get((req, res) => {
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
  .post((req, res) => {
    console.log(req.body);
    const { id, title, description, timestamp } = req.body;
    const newVideoObj = {
      id: id,
      title: title,
      channel: "Youtube",
      image: "http://localhost:8080/images/Upload-video-preview.jpg",
      description: description,
      views: "1000",
      likes: "1000",
      duration: "5:01",
      video: "https://project-2-api.herokuapp.com/stream",
      timestamp: timestamp,
      comments: [
        {
          id: uuid(),
          name: "KashMoney",
          comment: "This vid is amazing.",
          likes: 5,
          timestamp: timestamp
        },
        {
          id: uuid(),
          name: "KashMoney",
          comment: "This vid is amazing.",
          likes: 5,
          timestamp: timestamp
        }
      ]
    }
    const allVideos = readFile();
    const newVidArray = [...allVideos, newVideoObj];
    createNewVidList(newVidArray);
    res.status(201).json(newVidArray);
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