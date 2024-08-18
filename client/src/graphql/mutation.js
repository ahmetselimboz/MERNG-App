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

export const DELETE_PRODUCT = gql`
  mutation DeleteProduct($productId: ID!) {
    deleteProduct(productId: $productId) {
      id
    }
  }
`;

export const DELETE_PRODUCT_TEXT = `
  mutation DeleteProduct($productId: ID!) {
    deleteProduct(productId: $productId) {
      id
    }
  }
`;
