const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const dotenv = require("dotenv").config();
const schema = require("./schema/schema");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);
app.get("/", (req, res) => res.send("hello world"));

app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
