import path from "path";
import express from "express";

import countriesList from "./data/countryList.json";
import data from "./data/initFullData";

const DIST_DIR = __dirname;
const HTML_FILE = path.join(DIST_DIR, "index.html");

const PORT = process.env.PORT || 3000;

const server = express();

server.use(express.static(DIST_DIR));

server.get("/", (req, res) => {
  res.sendFile(HTML_FILE);
});

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


server.get("/*", (req, res) => {
  res.redirect("/");
});

server.listen(PORT, () => console.log(`Listening on ${PORT}`));// eslint-disable-line
