const express = require('express');
const app = express();
const PORT = 8080;
const videoList = require('./routes/video');

app.use('/videos', videoList);

app.listen(PORT, () => {
  console.log("Hello Beautiful!");
});