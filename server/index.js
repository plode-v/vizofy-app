require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser());

app.get('/', (req, res) => {
    res.send("Hello world");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
})