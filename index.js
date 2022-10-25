const express = require('express')

const app = express()

const port = 3000

app.get('/users', (req, res) => {
    res.json({ message: 'Users API'})
})


app.listen(port, () => {
    console.log('App running in port', port)
})