const express = require("express");
const app = express();

app.set("view-engine", "ejs");

app.get("/", (req, res) => {
  res.render("index.ejs", { name: "ShokadinuEU" });
});

app.get("/login", (req, res) => {
  res.render("login.ejs", { info: "This is Login Page!" });
});

app.get("/register", (req, res) => {
  res.render("register.ejs", { info: "This is Register Page!" });
});

app.post("/register", (req, res) => {});

app.listen(4000, console.log("Server start listening on port 4000"));
