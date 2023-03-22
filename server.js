const express = require('express')
require('dotenv').config()

const app = express()
app.use(express.json())

app.use(express.static(__dirname + '/public'))

const {PORT} = process.env

const {
    createFighter,
    createWeapon,
    getFightersList,
    getFightersWeapons,
    deleteWeapon,
} = require('./controller.js')

app.post('/fighter', createFighter)
app.post('/weapon', createWeapon)
app.get('/fighters-list', getFightersList)
app.get('/fighters-and-weapons', getFightersWeapons)
app.delete('/weapon/:id', deleteWeapon)

app.listen(PORT, () => console.log(`up on ${PORT}`))