//Get request for the main home page
const express = require('express');

const homeRouter = express.Router();

homeRouter.get('/', (req, res) =>{
    res.sendFile(__dirname + "index");
});

module.exports = homeRouter;