require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const Blog = require("./models/blog");

// create instance of express app
const app = express();
const PORT = process.env.PORT || 3000;

// register view engine.
app.set("view engine", "ejs");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(
        `connected to database: Server running at http://localhost:${PORT}`
      );
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.get("/", (req, res) => {
  const blogs = [
    {
      name: "Manchester United History",
      snippet:
        "Founded in 1878, Manchester United has become one of the most iconic and successful football clubs in the world.",
    },
  ];

  res.render("home", { title: "Nyumbani", blogs });
});

// search
app.get("/search", (req, res) => {
  res.render("search", { title: "Search for anything" });
});

// about
app.get("/about", (req, res) => {
  res.render("about", { title: "About Taskfy" });
});

app.get("/add-blog", (req, res) => {
  const blog = new Blog({
    title: "getting started with flutter for complete beginers",
    snippet: "Yeah for sure",
    body: "You don't need templates for quick starting with it.",
  });

  blog
    .save()
    .then((results) => {
      res.send(results);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.get("/all-blogs", (req, res) => {
  Blog.find()
    .then((results) => {
      res.json(results);
    })
    .catch((error) => {
      console.log(error);
    });
});

// Handle 404 errors
app.use((req, res) => {
  res.status(404).render("404", { title: "Page Not Found" });
});
