const express = require('express')
require('dotenv').config()

const app=express()


app.get('/',(req, res)=>{
    res.send("hello friends !")
})

app.get('/about',(req, res)=>{
    res.send("You are on About!")
})


app.listen(process.env.PORT,()=>{
    console.log(`Listning on port ${process.env.PORT}`)
})