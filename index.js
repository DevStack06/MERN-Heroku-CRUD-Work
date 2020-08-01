const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const http = require("http");
const socketIo = require("socket.io");
const PORT = process.env.PORT || 5000;

const mongoose = require("mongoose");
const server = http.createServer(app);
//database connection
mongoose.connect(process.env.MongoURL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
const connection = mongoose.connection;

connection.once("open", () =>
  console.log("mongoDB connection eastablished succesfully")
);

//middleware

const io = socketIo(server);
app.use(express.json());
app.use(express.static(__dirname + "/frontend" + "/build"));
app.use(cors());
//routes
const userroute = require("./routes/user");
const fromRoute = require("./routes/form");
app.use("/user", userroute);
app.use("/form", fromRoute);

//acknoledge api
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
});

app.listen(PORT, () =>
  console.log(`your app is running on port ${PORT} enjoy developing`)
);
