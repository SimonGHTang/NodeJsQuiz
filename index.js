const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const session = require("express-session");
const engines = require("consolidate");
//packages turned into objects to use

const HomeRouter = require("./routes/home.server.router");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
//simplifies incomeing code

app.set("views", path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "")));

app.engine("/html", engines.mustache);
app.set("view engine", "html");
app.engine("html", require("ejs").renderFile);

app.use("/", HomeRouter);

app.listen(8080, function(){
    console.log("thingy quiz listening on port 8080");
})