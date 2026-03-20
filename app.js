const express = require(".");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/diary", diaryRouter);

module.exports = app;
