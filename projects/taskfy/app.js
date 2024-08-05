// import modules
/*
import express from "express"
import fs from "fs" 
*/

const express = require("express");
const fs = require("fs");

// create nstance of express app
const app = express();
const PORT = process.env.PORT || 3000;
// const PORT = process.env.TZ

// register view engine.
app.set("view engine", "ejs");

// listen for requests
app.listen(PORT, () => {
  console.log(`listening at port: ${PORT}`);
});

// home page
app.get("/", (req, res) => {
  const blogs = [
    {
      Njox: "njox loves jacsript but not frameworks",
      snippest: "don't ignores framework if you want to be employed at google",
    },
    {
      jidamva:
        "because jhe wants to be employed at google, I work fowkr with the basics of javascript",
      snippest: "be an engneer not a frameworker",
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
  res.render("about");
});

// player
app.get("/player", (req, res) => {
  res.render("player");
});

app.get("/player/:id", (req, res) => {
  res.send(req.params)
})

// 404 page
app.get("*", (req, res) => {
  res.render("404");
});
