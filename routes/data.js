"use strict"

const express = require("express")
let router = express.Router()

router
    .route("/save")
    .post((req, res) => {
        console.log(req.body);
        res.send("hello POST /data")
    })
module.exports = router