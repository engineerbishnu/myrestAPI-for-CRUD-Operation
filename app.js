const express = require("express");
const mongoose = require("mongoose");
const url =
  "mongodb+srv://dxuvian:tSZsWEGiq6JS8XPS@cluster0.ybbzqsw.mongodb.net/aliens";

const app = express();

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
const con = mongoose.connection;

con.on("open", () => {
  console.log("connected...");
});

app.use(express.urlencoded({ extended: false }));

const alienRouter = require("./routes/aliens");
app.use("/aliens", alienRouter);

app.listen(9000, () => {
  console.log("Server started");
});
