const express = require("express");
// const models = require("./models");
const expressGraphQL = require("express-graphql");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const schema = require("./schema/schema");
const keys = require("../keys/devKeys");

const app = express();

mongoose
	.connect(keys.mongoURI)
	.then(() => console.log("MongoDB Connected"))
	.catch(err => console.log(err));

app.use(bodyParser.json());

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port: ${port}`));

app.use(
	"/graphql",
	expressGraphQL({
		schema,
		graphiql: true
	})
);

module.exports = app;
