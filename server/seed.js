import Database from "better-sqlite3";

//seed file is to initially populate database with some initial data, this is termed "seed".

//this is connecting database to database file to get methods from better-sqlite3
const db = new Database("database.db");

//executes sql query. back ticks MUST BE USED. Inside brackets after movies, I put columns that I want for database.
db.exec(`CREATE TABLE IF NOT EXISTS movies (
id INTEGER PRIMARY KEY AUTOINCREMENT, 
movie TEXT,
year INTEGER
)`);
//PRIMARY KEY - flagging id as completely unique.
//AUTOINCREMENT - start at 1 and add each record after.

db.exec(`
INSERT into movies (movie, year)
VALUES
('Black Narcissus', 1947),
('Ran', 1985),
('Day of Wrath', 1943)
`);
