import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors';
import { sequelize } from './database/connection'
import { resourceController } from './controllers/resourceController'


const port = 9999

const app = express()
app.use(bodyParser.json())
app.use(cors())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

let questions = [
    {
        "id": 1,
        "content": "Which do prefer?",
        "answers": [
            {
                "id": 1,
                "content": "First",
                "value": 1000,
                "path": "./img/1.jpg"
            },
            {
                "id": 2,
                "content": "Second",
                "value": 2000,
                "path": "./img/1.jpg"
            },
            {
                "id": 3,
                "content": "Third",
                "value": 3000,
                "path": "./img/1.jpg"
            }
        ]
    },
    {
        "id": 2,
        "content": "Which do prefer?",
        "answers": [
            {
                "id": 1,
                "content": "First",
                "value": 1000,
                "path": "./img/1.jpg"
            },
            {
                "id": 2,
                "content": "Second",
                "value": 2000,
                "path": "./img/1.jpg"
            },
            {
                "id": 3,
                "content": "Third",
                "value": 3000,
                "path": "./img/1.jpg"
            }
        ]
    },
]

app.get('/', (req, res) => {
    res.send(questions)
})

let prices = [
    {
        "type": "In-House",
        "jr": 65,
        "mid": 70,
        "sr": 75,
        "tech": 95,
        "engMan": 110,
        "qa": 70
    },
    {
        "type": "NearshoreOffSite",
        "jr": 30,
        "mid": 38,
        "sr": 46,
        "tech": 55,
        "engMan": 75,
        "qa": 34
    },
    {
        "type": "OffshoreOffSite",
        "jr": 25,
        "mid": 28,
        "sr": 30,
        "tech": 40,
        "engMan": 55,
        "qa": 26
    },
    {
        "type": "NearshoreOnSite",
        "jr": 70,
        "mid": 75,
        "sr": 85,
        "tech": 100,
        "engMan": 125,
        "qa": 70
    },
    {
        "type": "OffshoreOnSite",
        "jr": 70,
        "mid": 75,
        "sr": 85,
        "tech": 100,
        "engMan": 125,
        "qa": 70
    }
]

app.get('/prices', (req, res) => {
    res.send(prices)
})

app.listen(port, () => {
    console.log("APi is running on port " + port)
})
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

