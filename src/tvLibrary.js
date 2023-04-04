import { db } from "./dbConnect.js"

export function addNewTv(req,res) {
  const newTv = req.body

  //CREATE: add new TV show
  db.collection('tvShow')
    .add(newTv)
    .then(doc => res.status(201).send(`New Tv Added: ${doc.id}`))
    .catch(err => res.status(500).send(err))
}

export async function getAllTv(req,res) {
    const collection = await db.collection('tvshows').get()
    .catch(err => res.status(500).send(err))

    const tvShowList = collection.docs.map(
         tvShow => ( {...tvShow.data(), id: tvShow.id})
    )
}

res.send.status(201).send(tvShowList)