const express = require("express");
const expressGraphQL = require("express-graphql");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const schema = require("./schema/schema");
const dotenv = require("dotenv");

// Load ENV variables
dotenv.config({ path: "../config/config.env" });

const app = express();
const port = process.env.PORT || 4000;

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Server is up!");
});

app.listen(port, () => console.log(`Server running on port: ${port}`));

app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true
  })
);

module.exports = app;
