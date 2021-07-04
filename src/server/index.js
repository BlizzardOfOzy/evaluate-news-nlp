var path = require('path')
const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
const axios = require('axios')

const sentimentUrl = 'https://api.meaningcloud.com/sentiment-2.1'

const app = express()
app.use(express.static('dist'))
app.use(express.json())

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.post('/analyze', async function (req, res) {
    sentiment = await axios.get(sentimentUrl, {
        params: {
            key: process.env.API_KEY,
            lang: 'en',
            txt: req.body.text,
        }
    })
    res.send({subjectivity: sentiment.data.subjectivity})
})
