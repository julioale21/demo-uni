const express = require('express')

const app = express()
const port = 4000

app.get('/salaries', (req, res) => {
    res.json({ message: 'Salaries API' })
})

app.get('/users', (req, res) => {
    res.json({ message: 'Users API'})
})

app.get('/events', (req, res) => {
    res.json({ message: 'Events API' })
})

app.listen(port, () => {
    console.log('App running in port', port)
})