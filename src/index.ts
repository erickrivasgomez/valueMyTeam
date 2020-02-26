import express from 'express'
import bodyParser from 'body-parser'
import { sequelize } from './database/connection'
import { questionController } from './controllers/questionController'


const port = 1337

const app = express()
app.use(bodyParser.json())
app.use('/api', questionController)

app.get('/', (req, res) => {
  res.send('API is running OK')
})

sequelize

  .authenticate()
  .then( async() => {
    app.listen(port, ()=> {
        console.log("APi is running on port " + port)
    })
})

