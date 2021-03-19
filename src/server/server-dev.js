import path from "path";
import express from "express";
import cors from "cors";

import webpack from "webpack";// eslint-disable-line
import webpackDevMiddleware from "webpack-dev-middleware";// eslint-disable-line
import webpackHotMiddleware from "webpack-hot-middleware";// eslint-disable-line
import config from "../../webpack.dev.config";

import countriesList from "./data/countryList.json";
import data, { en_data, ru_data, de_data } from "./data/initFullData";
console.log(en_data)

const DIST_DIR = __dirname;
const HTML_FILE = path.join(DIST_DIR, "index.html");

const PORT = process.env.PORT || 3000;

const compiler = webpack(config);

const server = express();

server.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
}));

server.use(webpackHotMiddleware(compiler));

server.use(cors());

server.use(express.static(DIST_DIR));

server.get("/api/countriesList", (req, res) => {
  res.json(countriesList);
});

server.get("/api/country", (req, res) => {
  const countryName = Object.keys(data)[0];
  const countryData = en_data[countryName] || {};
  res.json(countryData);
});

server.get("/api/country/:countryName", (req, res) => {
  const countryName = req.params.countryName.toLowerCase();
  const countryData = en_data[countryName] || {};
  res.json(countryData);
});

server.get("/api/country/:countryName/:lang", (req, res) => {
  const countryName = req.params.countryName.toLowerCase();
  const getLangData = (countryName) => {
    switch(req.params.lang) {
      case "ru": {
        return ru_data[countryName];
      }
      case "de": {
        return de_data[countryName];
      }
      case "all": {
        return data[countryName];
      }
      case "en": {
      }
      default: {
        return en_data[countryName];
      }
    }
  }
  const countryData = getLangData(countryName) || {};
  res.json(countryData);
});

server.get("/*", (req, res) => {
  res.sendFile(HTML_FILE);
});

server.listen(PORT, () => console.log(`Listening on ${PORT}`));// eslint-disable-line
