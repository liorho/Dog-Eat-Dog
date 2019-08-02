const express = require('express')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, "dist")))
app.use(express.static(path.join(__dirname, "node_modules")))


const port = process.env.PORT || 1200
app.listen(port, function(){
    console.log("Server running on port " + port)
})