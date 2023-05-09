const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
const authRouter = require('./routes/auth.routes')
const app = express()
const PORT = config.get('serverPort')

app.use(express.json())
app.use('/api/auth', authRouter)


const start = async () => {
    try {

        await mongoose.connect(config.get('db'))


        app.listen(PORT, () => {
            console.log('Server start', PORT)
        })
    } catch (e) {
        console.log(e)
        res.send({message: `Server error ${e}`})
    }
}

start();