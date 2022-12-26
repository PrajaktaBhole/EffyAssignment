const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const env = require("dotenv");
const routes = require("./routes/routes");
const { Company, User } = require("./model/model");
const http = require("http");

const app = express(); //transfer the contents of Express into a new constant called app
app.use(cors({ origin: "*" }));

env.config();

const mongoString = process.env.DATABASE_URL; // storing the string into a variable called mongoString

mongoose.connect(mongoString); //connect the database to our server using Mongoose
const database = mongoose.connection;

// const connection = mongoose.connect("mongodb://localhost:27017");
// mongoose.connect("mongodb://localhost:27017/Effy-Assignment", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
// });

// database.on means it will connect to the database, and throws any error if the connection fails
database.on("error", (error) => {
  console.log(error);
});

// //database.once means it will run only one time. If it is successful, it will show a message that says Database Connected
database.once("connected", () => {
  console.log("Database connected");
});

app.use(express.json());
app.use("/api", routes); // this app.use takes two things. One is the base endpoint, and the other is the contents of the routes. Now, all our endpoints will start from '/api'.

app.listen(3000, () => {
  console.log("Server running on port 3000!");

  // var options = {
  //   port: 3000,
  //   host: "127.0.0.1",
  // };

  // var request = http.request(options);

  // request.setHeader("Access-Control-Allow-Origin", "*");
  // // request.setHeader('content-type', 'text/html');

  // request.end();
});
