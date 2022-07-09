const express = require("express")
const {downloaderRouter} = require("./src/routes/router")

const app = express()
app.use("/download", downloaderRouter)


const PORT = process.env.PORT || 5151

app.listen(PORT,()=>{
    console.log(`app is listening on port ${PORT}`)
})


