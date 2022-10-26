const express = require('express')

const app = express()
const port = 6000

app.get('/salaries', (req, res) => {
    res.json({ message: 'Salaries API' })
})

app.get('/users', (req, res) => {
    res.json({ message: 'Users API v2'})
})

app.get('/products', (req, res) => {
    res.json({ message: 'Products API'})
})

app.get('/events', (req, res) => {
    res.json({ message: 'Events API' })
})

app.listen(port, () => {
    console.log('App running in port', port)
})