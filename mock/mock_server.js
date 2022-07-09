const express = require("express")
const app = express()
require("dotenv").config()

const object = require("./sample_response")

// const axios = require("axios");

// const options = {
//   method: 'GET',
//   url: 'https://youtube-media-downloader.p.rapidapi.com/v2/video/details',
//   params: {videoId: 'G33j5Qi4rE8'},
//   headers: {
//     'X-RapidAPI-Key': 'f3294d8026msh476aa955e11e7bfp165e1cjsn88880060b485',
//     'X-RapidAPI-Host': 'youtube-media-downloader.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

app.use(express.json())




app.get("/youtube",(req, res)=>{
    console.log(object);
    res.json(object)
})
const port = process.env.MOCK_SERVER_PORT || 2000
app.listen(port,()=>{
    console.log(`mock server started at port ${port}`);
})


