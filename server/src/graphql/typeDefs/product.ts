const typeDefs = `#graphql
  type Product {
    id:ID!
    name:String!
    price:String!
    color:String!
  }

  type Query {
    getProducts: [Product]
    getProduct(productId : ID!): Product
  }

  input Input{
    name:String!
    price:String!
    color:String!
  }

  type Mutation {
    createProduct(body: Input!):Product
  }

`;

export default typeDefs