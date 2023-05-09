const express = require('express');
const mongoose = require('mongoose');
const config = require('config');

const app = express()
const PORT = config.get('serverPort')


const start = async () => {
    try {

        await mongoose.connect(config.get('db'));


        app.listen(PORT, () => {
            console.log('Server start', PORT);
        })
    } catch (e) {
        console.log(e);
    }
}

start();