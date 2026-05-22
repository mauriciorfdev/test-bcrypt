# Authentication in Express with Mongoose and Bcrypt

## About Project

Simple REST API built with Express to demonstrate user authentication using Bcrypt and Mongoose.

The project simulates a basic register/login flow for users where the API:

- Stores name, email and hashed password.
- Allows access when their credentials are sent.

## Folder Structure Overview

```
.
├── config
│   └── db.js
├── controllers
│   └── user.controller.js
├── models
│   └── user.model.js
├── app.js
└── server.js
```

_The following files are omitted for simplicity: `.env`, `.gitignore`, `package.json`, `package-lock.json`, `README.md`_

**app.js:** Express app configuration and endpoints

**server.js:** Starts the server

**db.js:** MongoDB connection

**user.model.js:** User schema and model definition

**user.controller.js:** Handles requests and responses for authentication endpoints

## API Endpoints

The endpoints can be tested using Postman or Thunder Client (VS Code).

| Method | Endpoint             | Action                                         |
| ------ | -------------------- | ---------------------------------------------- |
| GET    | `/api/users`         | Get all registered users (name and email only) |
| POST   | `/api/auth/register` | Register a new user                            |
| POST   | `/api/auth/login`    | Login user                                     |

## Getting Started

1. Install dependencies: `npm install`
2. Setup `.env` file: `MONGO_URI=your_connection_string`
3. Run the server: `npm start`
4. The server will run on:
   - `http://localhost:3000`

## Request Example

### POST `/api/auth/register`

#### Request Body

```json
{
  "name": "John",
  "password": "asd123",
  "email": "john@gmail.com"
}
```

#### Status Codes

- `201 Created` : { "msg": "User Created" }
- `400 Bad Request` : { "msg": "All fields are required" }
- `409 Conflict` : { "msg": 'Email already exists' }

### POST `/api/auth/login`

#### Request Body

```json
{
  "password": "asd123",
  "email": "john@gmail.com"
}
```

#### Status Codes

- `200 OK`: { "msg": "Login Successful" }
- `400 Bad Request`: { "msg": "Email and password are required" }
- `401 Unauthorized`: { "msg": "Invalid Credentials" }
