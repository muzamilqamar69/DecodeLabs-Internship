# Backend API Development

## Project Overview

This project is a professional backend API built with Node.js and Express. It demonstrates RESTful routes, server-side validation, centralized error handling, consistent JSON responses, and in-memory data storage. The application is structured for easy future upgrades to a database like MongoDB.

## Features

- RESTful CRUD operations for user resources
- Input validation with `express-validator`
- Centralized error handling middleware
- Logger middleware for HTTP method, endpoint, and timestamp
- JSON request and response format
- CORS enabled for secure cross-origin access
- In-memory storage using arrays for temporary persistence

## Installation

1. Clone or copy the repository files.
2. Open the project folder in your terminal.
3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. The API will run at `http://localhost:5000` by default.

## API Endpoints

### GET /users

Retrieve all users.

Example response:

```json
{
  "success": true,
  "message": "Users retrieved successfully",
  "data": []
}
```

### GET /users/:id

Retrieve a single user by ID.

Example response:

```json
{
  "success": true,
  "message": "User retrieved successfully",
  "data": {
    "id": "uuid",
    "name": "John Doe",
    "email": "john@example.com",
    "age": 22
  }
}
```

If the user is not found:

```json
{
  "success": false,
  "message": "User not found"
}
```

### POST /users

Create a new user.

Request body example:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 22
}
```

Successful response:

```json
{
  "success": true,
  "message": "User created successfully",
  "data": {
    "id": "uuid",
    "name": "John Doe",
    "email": "john@example.com",
    "age": 22
  }
}
```

### PUT /users/:id

Update an existing user.

Request body example:

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "age": 25
}
```

Successful response:

```json
{
  "success": true,
  "message": "User updated successfully",
  "data": {
    "id": "uuid",
    "name": "Jane Doe",
    "email": "jane@example.com",
    "age": 25
  }
}
```

### DELETE /users/:id

Delete a user by ID.

Successful response:

```json
{
  "success": true,
  "message": "User deleted successfully",
  "data": null
}
```

If the user is not found:

```json
{
  "success": false,
  "message": "User not found"
}
```

## Sample Postman Requests

- GET `http://localhost:5000/users`
- GET `http://localhost:5000/users/{id}`
- POST `http://localhost:5000/users`
- PUT `http://localhost:5000/users/{id}`
- DELETE `http://localhost:5000/users/{id}`

Use the JSON body examples shown above for POST and PUT requests.

## Folder Structure

```
project
│
├── server.js
├── package.json
├── .env
│
├── routes
│      users.js
│
├── controllers
│      userController.js
│
├── services
│      userService.js
│
├── middleware
│      validation.js
│      errorHandler.js
│
├── models
│      userModel.js
│
├── utils
│      responseHelper.js
│
└── README.md
```

## Technologies Used

- Node.js
- Express.js
- dotenv
- cors
- express-validator
- UUID
- nodemon

## Future Improvements

- Add a MongoDB or PostgreSQL persistence layer
- Implement authentication and authorization
- Add pagination and filtering for user lists
- Add request logging to files
- Add unit and integration tests
