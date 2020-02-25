import express from 'express'
import bodyParser from 'body-parser'
import db from './repositories/models/'

const port = 1337

const app = express()
app.use( bodyParser.json() )

//app.use( '/user', userController)
//app.use( '/post', postController)

app.get('/', (req, res) => {
    res.send('API is running OK')
})

db.then( async() => {
    app.listen(port, ()=> {
        console.log("APi is running on port " + port)
    })
})
