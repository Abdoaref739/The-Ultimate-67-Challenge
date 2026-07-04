const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
let leaderboard = [];


app.post("/", (req, res) =>{
    const score = req.body.score;
    const username = req.body.username
    console.log(req.body)
    res.json({
        message: "Received!",
        username: req.body.username,
        score: req.body.score
    });
    let player = leaderboard.find(p => p.username === username);
    if(player){
        player.score = score;
    }else if(!player){
    leaderboard.push({username: req.body.username, score: req.body.score});
    }
});



app.get("/leaderboard", (req, res) =>{
    console.log("Leaderboard called");
    res.json(leaderboard)
})

//server start
app.listen(3000, () => {
    console.log("server worked")
    console.log(leaderboard)
})

const Player = require("./models/Player");