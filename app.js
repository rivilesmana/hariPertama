const express = require('express')
const app = express()
const route = require('./src/route')

app.use(express.json())
app.use('/api', route)

app.get('/', (req, res)=>{
    try {
        res.status(200).json({
        message: 'Success bro'
        })
    } catch (error) {
        console.log(error)
        req.statusCode(500).json({})
        message: 'Internal Server Error'    
      
    }
})

app.listen(4000, ()=>{
    console.log("running")
})