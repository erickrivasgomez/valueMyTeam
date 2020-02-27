import express from 'express'
import bodyParser from 'body-parser'
import { sequelize } from './database/connection'
import { resourceController } from './controllers/resourceController'


const port = 1337

const app = express()
app.use(bodyParser.json())
app.use('/api2', resourceController)

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

