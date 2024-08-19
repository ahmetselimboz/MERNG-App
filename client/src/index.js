import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Footer from "./components/footer.tsx"
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";




const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_API_URL,
  cache: new InMemoryCache(),
});

console.log(process.env.REACT_APP_GRAPHQL_API_URL)


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <App />
    <Footer/>
  </ApolloProvider>
);
