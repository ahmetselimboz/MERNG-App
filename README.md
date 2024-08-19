![Uygulama Ekran Görüntüsü](https://image.ahmetselimboz.com.tr/image/merng_thumbnail.jpg)

# MERNG-App

This project is a MERNG (MongoDB, Express, React, Node.js, GraphQL) application designed to demonstrate CRUD (Create, Read, Update, Delete) operations using GraphQL. MERNG-App allows users to perform efficient CRUD operations on data.

## Project Links

- [Live Demo](https://merng-app.ahmetselimboz.com.tr/)

## Technologies

This project uses the following technologies:

- **MongoDB:** For database management.
- **Express:** To build backend APIs.
- **React:** For developing the user interface.
- **Node.js:** As the server-side runtime environment.
- **GraphQL:** For querying and managing data.

## Features

- **GraphQL CRUD Operations:** Create, read, update, and delete data in the database using GraphQL.

## Installation and Setup

### Requirements

- Node.js (v14 or later)
- MongoDB
- Yarn or NPM

### Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/ahmetselimboz/MERNG-App.git
    cd MERNG-App
    ```

2. Install the required dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file and add the necessary environment variables:

    ```bash
    MONGODB_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

4. Start the development server:

    ```bash
    npm start
    ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```plaintext
MERNG-App/
│
├── client/               # React frontend
│   ├── src/
│   │   ├── components/   # Reusable UI components
│   │   ├── pages/        # Main application pages
│   │   └── ...
│   └── ...
│
├── server/               # Express & GraphQL backend
│   ├── models/           # MongoDB models
│   ├── resolvers/        # GraphQL resolvers
│   ├── typeDefs/         # GraphQL schema definitions
│   └── ...
│
└── ...
