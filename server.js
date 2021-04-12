
require('dotenv').config();
const path = require('path');
const express = require('express');
//allows to send http requests
const axios = require('axios');

const path = require("path");
const express = require("express");

// Import express-session
const session = require("express-session");
const exphbs = require("express-handlebars");

const routes = require("./controllers");
const sequelize = require("./config/connection");
const helpers = require("./utils/helpers");
const passport = require("../config/passport");

const app = express();
const PORT = process.env.PORT || 3001;

const reedURL='https://www.reed.co.uk/api/1.0/search?api_key='
+process.env.REED_API_KEY;

app.get('/search/reed.co.uk/api/1.0/search?keywords=/:query', async function(req, res){
    try{
    const {data} = await axios.get(reedURL + "&q=" + req.params.query);
    res.json(data);
    }
    catch(err){
        console.log(err);
    }
});


// Set up sessions
const sess = {
  secret: "Super secret secret",
  resave: false,
  saveUninitialized: true,
};

app.use(passport.initialize());
app.use(passport.session());
app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now listening"));
});
