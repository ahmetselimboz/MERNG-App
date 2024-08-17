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
`;

export default typeDefs