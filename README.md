# Simple Library API

## Project Description
This project is a simple backend application built using Node.js, Express.js, Sequelize, and SQLite.

It demonstrates:
- creating models
- defining relationships
- implementing full CRUD operations
- organizing backend code using routes and controllers

The project contains two models:
- Author
- Book

Relationship:
- One Author has many Books
- One Book belongs to one Author

---

## Technologies Used
- Node.js
- Express.js
- Sequelize
- Sequelize CLI
- SQLite

---

## Project Structure

simple-library-api/
- config/
- controllers/
- migrations/
- models/
- routes/
- seeders/
- app.js
- database.sqlite
- package.json
- package-lock.json
- README.md

---

## Setup Instructions

1. Open the project in VS Code
2. Open the terminal
3. Install dependencies:

```bash
npm install