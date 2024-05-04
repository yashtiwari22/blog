import mysql from "mysql";

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "yash@22012002#",
  database: "blog",
});
