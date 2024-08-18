import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query GetProducts {
    getProducts {
      id
      name
      price
      color
    }
  }
`;

export const GET_PRODUCTS_TEXT = `
query GetProducts {
  getProducts {
    id
    name
    price
    color
  }
}
`;

export const GET_PRODUCT = gql`
  query GetProduct($productId: ID!) {
    getProduct(productId: $productId) {
      id
      color
      name
      price
    }
  }
`;
