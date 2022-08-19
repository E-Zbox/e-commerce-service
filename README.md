# E-Commerce App powered with GraphQL 🚀👩‍💻

### Table of Contents

-   [ E-commerce App powered with GraphQL](#e-commerce-app-powered-with-graphql-🚀👩‍💻)
-   [Description](#description)
-   [The Build Process](#the-build-process-🏗👩‍🔬)
    -   [Schema](#schema)
    -   [Resolvers](#resolvers)
-   [Running the code](#running-the-code)
-   [Technologies used](#technologies-used)

## Description

This is a backend graphql service that was developed to mimic part features of an E-commerce backend service.

Features in the service perform CRUD operations for:

-   Product
    -   Name
    -   Description
    -   Quantity
    -   Reviews, etc.
-   Category
    -   Name
    -   Products
-   Review
    -   Title
    -   Date
    -   Comment
    -   Rating, etc

## The Build Process 🏗👩‍🔬

The [src folder](./src/) contains the [GraphQL schema](./src/schema.graphql), and [resolvers](./src/resolvers/index.js) for the various root queries available in the schema.

In the following lines below, a brief description will be given for each functionality.

### Schema

The various schema definition will be explained below:

[Product](./src/schema.graphql)

```graphql
type Product {
    id: ID!
    name: String!
    description: String!
    quantity: Int!
    ...
    category: Category
    reviews: [Review!]!
}
```

[Category](./src/schema.graphql)

```graphql
type Category {
    id: ID!
    name: String!
    products(filter: ProductsFilterInput): [Product!]!
}
```

[Review](./src/schema.graphql)

```graphql
type Review {
    id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Int!
    productId: ID!
}
```

You can find the [query and mutation schema definitions here](./src/schema.graphql)

### Resolvers

The resolvers folder, contains the resolver function handlers for the various schema definitions.

#### [Product](./src/resolvers/Product.js)

-   For the root-field `category`, _categoryId_ is passed as an argument while sending the query. The _categoryId_ is used to get the single category which the product belongs.
-   For the root-filed `reviews`, _productId_ is retrieved from the parent params, so as get the particular product and return all the product reviews available.

#### [Category](./src/resolvers/Category.js)

-   The root-field `products`, returns all the products contained in a particular category. To get the products, a filtering functionality is applied to all the products to get the products with a particular _categoryId_. Also, the gotten products can be filtered based on - **onSale** boolean value - **avgRating** calculated value
    This gives the user the leverage of getting necessary data and not overloaded data.

#### [Query](./src/resolvers/Query.js)

-   The `products` root-field returns the all available products, and filters the products based on **onSale** and **avgRating** filter arguments provided (optionally), by the user
-   The `product` root-field returns a single product, based on the _productId_ argument, used to find a single product if available
-   The `categories` root-field returns all the categories available.
-   et.c

## Running the code

To run the code, make sure you are using **node version >=14.17.0**, **npm version >=6.14.0**

Follow the below steps, to run the code using your terminal

-   Cloning the project

```shell
$ git clone https://www.github.com/E-Zbox/e-commerce-app.git
```

-   Switch directories

```shell
$ cd e-commerce-app
```

-   Installing project dependencies

```shell
$ npm install
```

-   Starting the express server

```shell
$ npm run dev
```

```shell
$ npm start
```

-   Using Postman, navigate to `localhost:<PORT>/graphql` and run the various queries and mutation defined in the [schema file](./src/schema.graphql)

Cheers 🥂 you have successfully ran the code 🎉🍾.

#### Feel free to shop using the services provided 😂😂

## Technologies used 👨‍💻⚙

Developed using:

-   [ExpressJS](https://www.express.js)
-   [GraphQL](https://www.howtographql.com)
-   [Mongoose](https://www.mongoose.io)
