# RentalX API
This project is a Node.js REST API. It simulates a car rental system, allowing users to manage vehicles, their features, and rental processes.​

## Features
- User Registration and Authentication: Users can register, log in, and manage their profiles.​
- Car Management: Admins can add new cars, list available cars, and assign specifications and categories to them.​
- Rental Process: Users can rent cars, view their rental history, and return vehicles.​
- Password Recovery: Users can reset their passwords via email.​

## Technologies Used
- Node.js: JavaScript runtime for building scalable network applications.​
- TypeScript: Superset of JavaScript that adds static typing.​
- Express: Web framework for Node.js to handle routing and middleware.​
- PostgreSQL: Relational database management system for storing application data.​
- SOLID Principles: Object-oriented design principles for creating maintainable code.​
- Test-Driven Development (TDD): Development approach where tests are written before code to ensure reliability.​

## Setup
Clone the Repository:
* git clone https://github.com/luizcurti/nodejs-ignite-rentalx.git

## Navigate to the Project Directory:
* cd nodejs-ignite-rentalx

## Install Dependencies:
* npm install

## Set Up the Database:
* Ensure PostgreSQL is installed and running.​
* Create a new database for the application.​
* Configure the database connection in the .env file.​

## Run Migrations:
* npm run typeorm migration:run

## Start the Application:
* npm run dev
