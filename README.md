# Express-Local-Authentication
This project is an Express.js application that implements a local authentication system using Passport.js, sessions, and routing. Users can register, log in, maintain authenticated sessions and logout from the session.

## Features
+ User registration
+ User login
+ User logout
+ Session-based authentication
+ Routing with Express Router
+ Authentication with Passport.js and passport-local

## Prerequisites
+ Node.js
+ npm
+ MySQL

## Installation
+ Clone the repository using the link provided above.
+ Install dependencies by opening the cloned folder in the terminal then type the command "npm install" and hit enter.
+ Start the app by using the "npm start" command.

# Database Configuration
Use MySQL Workbench or XAMP and start the MySQL server then in PhpMyAdmin create a database using the following SQL commands
```
CREATE DATABASE IF NOT EXISTS authentication;

USE authentication;

CREATE TABLE IF NOT EXISTS users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```
