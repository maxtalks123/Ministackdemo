import express from "express";
import cors from "cors";
import Database from "better-sqlite3";

const app = express();
const db = new Database("database.db");

app.listen("1234", () => {
  console.log("my salmon are not swimming in port 1234");
});

app.get("/seed", (request, response) => {
  response.status(200).json({ message: "hello" });
});

app.get("/movies", (request, response) => {
  if (request.query) {
    response.status(200).send("awesome, query sent");
  }
  try {
    let movies = db.prepare(`SELECT * FROM movies`).all();
    response.status(200).json(movies);
  } catch (err) {
    response.status(500).json(err);
  }
});
