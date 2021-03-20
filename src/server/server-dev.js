import path from "path";
import express from "express";
import cors from "cors";

import webpack from "webpack";// eslint-disable-line
import webpackDevMiddleware from "webpack-dev-middleware";// eslint-disable-line
import webpackHotMiddleware from "webpack-hot-middleware";// eslint-disable-line
import config from "../../webpack.dev.config";

import countriesList from "./data/countryList.json";
import data, { ru_data, de_data } from "./data/initFullData";

import passport from "passport";

const Strategy = require('passport-local').Strategy;

const db = require('./db');

const DIST_DIR = __dirname;
const HTML_FILE = path.join(DIST_DIR, "index.html");

const PORT = process.env.PORT || 3000;

const compiler = webpack(config);

function restoreCookie(res) {
  res.cookie("userName", "");
}

function storeCookie(req, res) {
  res.cookie("userName", req.user.displayName);
}

passport.use(new Strategy(
  function (username, password, cb) {
    db.users.findByUsername(username, function (err, user) {
      if (err) { return cb(err); }
      if (!user) { return cb(null, false); }
      if (user.password != password) { return cb(null, false); }
      return cb(null, user);
    });
  }));


passport.serializeUser(function (user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function (id, cb) {
  db.users.findById(id, function (err, user) {
    if (err) { return cb(err); }
    cb(null, user);
  });
});


const server = express();

server.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
}));

server.use(webpackHotMiddleware(compiler));

server.use(cors());

server.use(express.static(DIST_DIR));

server.use(passport.initialize());
server.use(passport.session());

server.get("/api/countriesList", (req, res) => {
  res.json(countriesList);
});

server.get("/api/country", (req, res) => {
  const countryName = Object.keys(data)[0];
  const countryData = data[countryName] || {};
  res.json(countryData);
});

server.get("/api/country/:countryName", (req, res) => {
  const countryName = req.params.countryName.toLowerCase();
  const countryData = data[countryName] || {};
  res.json(countryData);
});

server.get("/api/country/:countryName/:lang", (req, res) => {
  const countryName = req.params.countryName.toLowerCase();
  const getLangData = (countryName) => {
    switch (req.params.lang) {
      case "ru": {
        return ru_data[countryName];
      }
      case "de": {
        return de_data[countryName];
      }
      case "en":
      default: {
        return data[countryName];
      }
    }
  }
  const countryData = getLangData(countryName) || {};
  res.json(countryData);
});

const authenticate = passport.authenticate('local', { session: true });

server.get("/getUserData", (req, res) => {
  if (req.user) {
    res.send({ username: req.user.displayName });
  } else {
    res.send({ username: "214" });
  }
});

server.post('/login', authenticate, (req, res) => {
  /*   storeCookie(req, res); */
  res.send({ username: req.user.displayName });
});

server.get('/logout',
  function (req, res) {
    req.logout();
    res.redirect('/');
  });


server.get("/*", (req, res) => {
  res.sendFile(HTML_FILE);
});
server.listen(PORT, () => console.log(`Listening on ${PORT}`));// eslint-disable-line
