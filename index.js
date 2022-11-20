require('dotenv').config();

const express = require('express');
const app = express();
const PORT = 8080;
const videoList = require('./routes/video');
const cors = require('cors');

app.use(cors());
app.use('/videos', videoList);


app.listen(PORT, () => {
  console.log("Hello Beautiful!");
});