

import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone'
import typeDefs from "./src/graphql/typeDefs/product";
import resolvers from "./src/graphql/resolvers/product";
import database from './src/database/db'
import dotenv from "dotenv"

dotenv.config()

database.connectDatabase()
const PORT = process.env.PORT
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const { url } = await startStandaloneServer(server, {
    listen: { port: Number(PORT) },
});


console.log(`🚀  Server ready at: ${url}`);