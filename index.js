require('dotenv').config();

const express = require('express');
const app = express();
const videoList = require('./routes/video');
const cors = require('cors');

const PORT = process.env.PORT;

app.use(cors());
app.use('/videos', videoList);


app.listen(PORT, () => {
  console.log("Hello Beautiful!");
});