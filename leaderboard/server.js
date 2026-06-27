const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
let leaderboard = [];
let score;
let username;

app.post("/", (req, res) =>{
    score = req.body.score;
    name = req.body.name
    console.log(req.body)
    res.json({
        message: "Received!",
        username: req.body.username,
        score: score
    });

    leaderboard.push({name: req.body.username, score: score});
    console.log(req.body)
});



app.get("/leaderboard", (req, res) =>{
    console.log("Leaderboard called");
    res.json(leaderboard);
})

//server start
app.listen(3000, () => {
    console.log("server worked")
    console.log(leaderboard)
})

const Player = require("./models/Player");