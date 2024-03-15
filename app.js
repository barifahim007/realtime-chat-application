const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieparser = require("cookie-parser");
const path = require("path");

//call the express
const app = express();
dotenv.config();

// requiest parse

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieparser(process.env.COOKIE_PARSER));

app.use(express.static(path.join(__dirname, "public")));

// database coonectins
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log(`database connected success`);
  })
  .catch((err) => {
    console.log(err);
  });

//   set ejs view engine
app.set("view engine", "ejs");

// listen the port
app.listen(process.env.PORT, () => {
  console.log(`the port is running on ${process.env.PORT}`);
});
