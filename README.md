# Express-Local-Authentication
This project is an Express.js application that implements a local authentication system using Passport.js, sessions, and routing. Users can register, log in, maintain authenticated sessions, and logout from the session.

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
## Screenshots
### Welcome Screen
<img width="960" alt="image" src="https://github.com/chmuhammadowais/Express-Local-Authentication/assets/89311067/623f4281-edb1-462b-8d87-b9875eb48e87">

### Register Screen
<img width="960" alt="image" src="https://github.com/chmuhammadowais/Express-Local-Authentication/assets/89311067/746b9c2c-dbac-4f1b-a796-a4a45df045d8">

### Login Screen
<img width="960" alt="image" src="https://github.com/chmuhammadowais/Express-Local-Authentication/assets/89311067/3c9be21e-3614-46bf-a945-273bee1ca053">

### Home Screen
<img width="960" alt="image" src="https://github.com/chmuhammadowais/Express-Local-Authentication/assets/89311067/a1637eec-60a9-4d11-971c-f7b2793962e7">
