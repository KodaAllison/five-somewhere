# FiveSomewhere

A web application that displays cities where it's currently 5 PM, along with various details about each city, such as timezone, country, population, currency, language, and favorite beer.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Seeding the Database](#seeding-the-database)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features
- Displays cities where it's currently 5 PM.
- Shows details for each city including timezone, country, population, currency, language, and favorite beer.

## Tech Stack
### Front-end
- React
- Moment-timezone

### Back-end
- Node.js
- Express
- MongoDB (using Mongoose)
- dotenv (for environment variables)

## Installation
1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/FivePMPlaces.git
    cd FivePMPlaces
    ```

2. **Install dependencies**:
    - For the front-end:
      ```bash
      cd frontend
      npm install
      ```

    - For the back-end:
      ```bash
      cd backend
      npm install
      ```

3. **Set up environment variables**:
    - Create a `.env` file in the `backend` directory with the following content:
      ```plaintext
      MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/mydatabase?retryWrites=true&w=majority
      PORT=5000
      ```

## Running the Application
1. **Start the back-end server**:
    ```bash
    cd backend
    npm start
    ```

2. **Start the front-end server**:
    ```bash
    cd frontend
    npm start
    ```

## Seeding the Database
To seed the database with initial data, run the following command from the `backend` directory:
```bash
npm run seed