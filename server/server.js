const express = require("express");
// const models = require("./models");
const expressGraphQL = require("express-graphql");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const schema = require("./schema/schema");
const keys = require("../keys/devKeys");

const app = express();
const port = process.env.PORT || 4000;

mongoose
  .connect(keys.mongoURI, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Server is up!");
});

// Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });
}

app.listen(port, () => console.log(`Server running on port: ${port}`));

app.use(
  "/graphql",
  expressGraphQL({
    schema,
    graphiql: true
  })
);

module.exports = app;
