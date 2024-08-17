const typeDefs = `#graphql
    type Product {
        id:ID!
        name:String!
        price:String!
        color:String!
    }

  type Query {
    getProducts: [Product]
  }
`;
export default typeDefs;
