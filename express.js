const express = require('express')
const app = express()
app.get('/', (req, res) => {
    res.send("changes are being made!")
})
app.listen(3000);