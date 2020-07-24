const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const PORT = process.env.Port || 5000;

const mongoose = require("mongoose");

//database connection
mongoose.connect(process.env.MongoURL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;

connection.once("open", () =>
  console.log("mongoDB connection eastablished succesfully")
);

//middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "frontend", "build")));
app.use(cors());
//routes
const userroute = require("./routes/user");
const fromRoute = require("./routes/form");
app.use("/user", userroute);
app.use("/form", fromRoute);

//acknoledge api
app.get("*", (req, res) => {
  res.sendFile(
    path.join(__dirname, "frontend", "build", "public", "index.html")
  );
});

app.listen(PORT, () =>
  console.log(`your app is running on port ${PORT} enjoy developing`)
);
