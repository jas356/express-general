import express from 'express'
import cors from 'cors'

//import CRUD functions
import { addNewTv, getAllTv } from './src/tvLibrary.js'

const PORT = 3030

const app = express()
app.use( cors())
app.use( express.json())

//Get all TV shows
app.get("/tbShows", getAllTv)
// and TvShows
app.post("/tvShows", addNewTv)

app.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`)
})

