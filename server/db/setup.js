require("dotenv")
const fs = require("fs")

const db = require("./connect")

const sql = fs.readFileSync("./server/db/diary.sql").toString()

db.query(sql)
  .then((data) => {
    db.end();
    console.log("⭐ Setup complete");
  })
  .catch((err) => {
    console.log("❌", err);
    db.end();
  });