// import modules
/*
import express from "express"
import fs from "fs" 
*/

const express = require("express");
const fs = require("fs");
const mongoose = require("mongoose")

// create nstance of express app
const app = express();
const PORT = process.env.PORT || 3000;
const DBURI = "mongodb+srv://godblessnyagawa:<ruGe56sGHJyBngbs>@cluster0.8tybcem.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const connect = mongoose.connect(DBURI)
// const PORT = process.env.TZ


// register view engine.
app.set("view engine", "ejs");

// listen for requests
app.listen(PORT, () => {
  console.log(`listening at port: ${PORT} http://localhost:3000`);
});

app.use((req, res, next) => {
  console.log("new request made");
  console.log(`host: ${req.hostname}`);
  console.log(`request path: ${req.path}`);
  console.log(`request method: ${req.method}`);
  console.log("time: ", Date.now());
  
  next();
})

app.use((req, res, next) => {
  console.log("to the next middleware");

  next();
})
// home page
app.get("/", (req, res) => {
  const blogs = [
    {
      name: "Manchester United History",
      snippet:
        "Founded in 1878, Manchester United has become one of the most iconic and successful football clubs in the world.",
    },
    {
      name: "Premier League Titles",
      snippet:
        "Manchester United has won numerous Premier League titles, establishing itself as a dominant force in English football.",
    },
    {
      name: "Famous Players",
      snippet:
        "Manchester United has been home to many legendary players, including George Best, Eric Cantona, David Beckham, and Cristiano Ronaldo.",
    },
    {
      name: "Youth Academy",
      snippet:
        "The club's youth academy has produced world-class talent, including the likes of Ryan Giggs, Paul Scholes, and Marcus Rashford.",
    },
    {
      name: "Old Trafford Stadium",
      snippet:
        'Known as the "Theatre of Dreams", Old Trafford is one of the most famous football stadiums in the world.',
    },
    {
      name: "Champions League Triumphs",
      snippet:
        "Manchester United has won the UEFA Champions League multiple times, with memorable victories in 1968, 1999, and 2008.",
    },
    {
      name: "Sir Alex Ferguson Era",
      snippet:
        "Under the management of Sir Alex Ferguson, Manchester United enjoyed unprecedented success, winning numerous trophies.",
    },
    {
      name: "Rivalries",
      snippet:
        "Manchester United has fierce rivalries with clubs such as Liverpool, Manchester City, and Arsenal, making for exciting and intense matches.",
    },
    {
      name: "Community Work",
      snippet:
        "Manchester United is actively involved in community projects, using the power of football to make a positive impact.",
    },
    {
      name: "Global Fanbase",
      snippet:
        "With millions of fans around the world, Manchester United boasts one of the largest and most passionate fanbases in sports.",
    },
    {
      name: "Recent Transfers",
      snippet:
        "Manchester United continues to attract top talent, with high-profile signings in recent transfer windows.",
    },
    {
      name: "Club Legends",
      snippet:
        "Players like Bobby Charlton, Denis Law, and Roy Keane are celebrated as club legends for their contributions to Manchester United.",
    },
    {
      name: "Iconic Matches",
      snippet:
        "The club has been involved in some of the most iconic matches in football history, including thrilling comebacks and last-minute victories.",
    },
    {
      name: "Training Facilities",
      snippet:
        "Manchester United's state-of-the-art training facilities help the team maintain peak physical and tactical performance.",
    },
    {
      name: "Managerial Changes",
      snippet:
        "The club has seen several managerial changes in recent years as it strives to return to the top of English and European football.",
    },
    {
      name: "Merchandising",
      snippet:
        "Manchester United offers a wide range of merchandise, from kits and scarves to collectibles and memorabilia.",
    },
    {
      name: "Women's Team",
      snippet:
        "The Manchester United Women's team has been growing in strength, competing at the highest levels of women's football.",
    },
    {
      name: "Sponsorship Deals",
      snippet:
        "The club has lucrative sponsorship deals with major global brands, enhancing its financial strength and global reach.",
    },
    {
      name: "Cultural Impact",
      snippet:
        "Manchester United has had a significant impact on popular culture, featuring in films, music, and literature.",
    },
    {
      name: "Future Prospects",
      snippet:
        "With a mix of experienced players and young talent, Manchester United is looking to build a successful future.",
    },
  ];

  res.render("home", { title: "nyumbani", blogs });
});

// search
app.get("/search", (req, res) => {
  res.render("search", { title: "search everything you want into this page" });
});

// about
app.get("/about", (req, res) => {
  res.render("about", { title: "about taskfy" });
});

// player
app.get("/player", (req, res) => {
  res.render("player", { title: "get to know debora fernandez mavumbo" });
});

app.get("/create", (req, res) => {
  res.render("create", { title: "create blog post for taskfy" });
});

// app.get("/player/:id", (req, res) => {
//   res.send(req.params);
// });

// 404 page
app.get("*", (req, res) => {
  res.render("404", { title: "the page you are looking was not found" });
});
