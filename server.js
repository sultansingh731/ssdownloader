const express = require("express")
require("dotenv").config()
const {downloaderRouter} = require("./src/routes")

const app = express()
app.use("/download", downloaderRouter)


const PORT = process.env.PORT || 5151

app.listen(PORT,()=>{
    console.log(`app is listening on port ${PORT}`)
})


