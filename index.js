// imports modules
const express = require("express")
const app = express()
const ytdl = require('ytdl-core')
const cors = require('cors')

app.use(cors({credentials: true, origin: 'https://yuyudown.netlify.app'}))

// routes
app.post("/", async(req,res) => {
    const {url} = req.body
    // header
    res.header('Content-Disposition', `attachment; filename=video.mp4`);
    if(url == "" || url == undefined || url == null){
        return res.status(422).json({error: "URL invalida!"})
    }
    return ytdl(url, { filter: formart => formart.container === 'mp4'}).pipe(res)
})
// server port
app.listen(5000, () => {
    console.log("Server is running!")
})