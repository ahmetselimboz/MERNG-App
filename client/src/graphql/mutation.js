import { gql } from "@apollo/client";

export const CREATE_PRODUCT = gql`
  mutation CreateProduct($body: Input!) {
    createProduct(body: $body) {
      color
      name
      price
    }
  }
`;

export const CREATE_PRODUCT_TEXT = `
  mutation CreateProduct($body: Input!) {
    createProduct(body: $body) {
      color
      name
      price
    }
  }
`;

export const UPDATE_PRODUCT = gql`
  mutation UpdateProduct($body: updateInput!) {
    updateProduct(body: $body) {
      id
      color
      name
      price
     
    }
  }
`;

export const UPDATE_PRODUCT_TEXT = `
  mutation UpdateProduct($body: updateInput!) {
    updateProduct(body: $body) {
      id
      color
      name
      price

    }
  }
`;
