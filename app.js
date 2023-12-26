const express = require('express');
require("dotenv").config()
const cors = require("cors")
const app = express()
const PORT = 8000;
const router = require("./routes/router")

app.use(cors())
app.use(express.json())
app.use(router)

app.get('/',(req,res)=>{
    res.status(200).json("server Started")
})


app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})