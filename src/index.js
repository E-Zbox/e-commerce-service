const { join } = require("path");
const _ = require("lodash");
const { v4 } = require("uuid");
const { readFileSync } = require("fs");
const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { makeExecutableSchema } = require("@graphql-tools/schema");

require("dotenv").config({
    path: join(__dirname, `../.env.${process.env.NODE_ENV}`),
});

// env
const {
    env: { PORT },
} = process;

const { Mutation, Query, Category, Product } = require("./resolvers");
const data = require("./data");

const app = express();

const context = {
    author: "Ononogbu Ebenezer",
    data,
    modules: { _, uuidV4: v4 },
};

const typeDefs = readFileSync(join(__dirname, "schema.graphql"), {
    encoding: "utf-8",
});

const resolvers = {
    Mutation,
    Query,
    Category,
    Product,
};

const schema = makeExecutableSchema({ typeDefs, resolvers });

app.use("/graphql", graphqlHTTP({ context, schema }));

app.listen(PORT, () => console.log(`Server is listening on PORT ${PORT}`));
