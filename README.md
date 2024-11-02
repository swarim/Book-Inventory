
# Book Inventory

This project is a web application for managing a book inventory. It includes a **Django backend** for API management and a **React frontend** for a user-friendly interface. The system allows users to add, edit, delete, filter and search for books in the inventory.

---

## Table of Contents
1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Prerequisites](#prerequisites)
4. [Setup Instructions](#setup-instructions)
   - [Docker Setup](#docker-setup)
   - [Makefile Setup](#makefile-setup)
   - [Manual Setup](#manual-setup)
5. [Running the Application](#running-the-application)
   - [Using Docker](#using-docker)
   - [Using Makefile](#using-makefile)
   - [Manually](#manually)
6. [Usage Guide](#usage-guide)
7. [Makefile Commands](#makefile-commands)
8. [Troubleshooting](#troubleshooting)

---

## Features
- Add, edit, delete, and view books in the inventory.
- Search and filter books by various fields.
- Fully responsive design for mobile and desktop use.
- RESTful API for backend services.
- A sleek, modern interface for managing your book inventory.

---

## Technologies Used
- **Backend**: Python, Django REST Framework
- **Frontend**: React.js, CSS
- **Database**: PostgreSQL
- **Tools**: Docker, Makefile, Git

---

## Prerequisites
Before setting up the project, ensure you have the following installed:
- **Python 3.8+**
- **Node.js 14+ and npm**
- **PostgreSQL**
- **Docker and Docker Compose** (if using Docker)
- **Make** (for running Makefile commands)
- **Git** (for clonning and storing repo)

---

## Setup Instructions

### Docker Setup
1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```
2. **Create a `.env` file** in the `root` directory with the following content:
   ```
    POSTGRES_DB=secondbind
    POSTGRES_USER=secondbind
    POSTGRES_PASSWORD=secondbind
    POSTGRES_HOST="localhost"
    POSTGRES_DOCKER_HOST="db"
    POSTGRES_PORT="5432"
    DJANGO_SETTINGS_MODULE=Backend.settings

   ```
3. **Build and start the services using Docker Compose**:
   ```bash
   docker-compose up --build
   ```
   - This will set up and run the database, backend, and frontend in Docker containers.

### Makefile Setup
1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```
2. **Create a `.env` file** in the `Backend` directory with the same content as above.
3. **Set up all services using Makefile**:
   ```bash
   make setup
   ```
4. **Run the application**:
   ```bash
   make run
   ```

### Manual Setup

#### Backend Setup
1. **Navigate to the backend directory**:
   ```bash
   cd Backend
   ```
2. **Set up a Python virtual environment**:
   - On **Windows**:
     ```bash
     python -m venv .venv
     .venv\Scripts\activate
     ```
   - On **macOS/Linux**:
     ```bash
     python3 -m venv .venv
     source .venv/bin/activate
     ```
3. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```
4. **Set up environment variables**:
   - Create a `.env` file in the `root` directory with the content provided above.

#### Frontend Setup
1. **Navigate to the frontend directory**:
   ```bash
   cd Frontend
   ```
2. **Install frontend dependencies**:
   ```bash
   npm install
   ```

#### Database Setup
1. **Ensure PostgreSQL is installed and running**.
2. **Create a database and user**:
   - Using `psql`:
     ```sql
     CREATE DATABASE secondbind;
     CREATE USER secondbind WITH PASSWORD 'secondbind';
     GRANT ALL PRIVILEGES ON DATABASE secondbind TO secondbind;
     ```

---

## Running the Application

### Using Docker
1. **Start the services**:
   ```bash
   docker-compose up
   ```
2. **Access the application**:
   - **Frontend**: [http://localhost:3000](http://localhost:3000)
   - **Backend**: [http://localhost:8000](http://localhost:8000)

### Using Makefile
1. **Set up and run all services**:
   ```bash
   make setup
   make run
   ```
2. **Access the application** using the URLs above.

### Manually
1. **Run the backend**:
   - **Activate the virtual environment**:
     - On **Windows**:
       ```bash
       .venv\Scripts\activate
       ```
     - On **macOS/Linux**:
       ```bash
       source .venv/bin/activate
       ```
   - **Apply migrations and start the server**:
     ```bash
     python manage.py migrate
     python manage.py runserver
     ```
2. **Run the frontend**:
   ```bash
   cd Frontend
   npm start
   ```

---

## Usage Guide

### Adding a Book
1. Click on the "Add Book" button in the navigation bar.
2. Fill out the form with the book details (title, author, genre, publication date, ISBN).
3. Click "Submit" to add the book to the inventory.

### Editing a Book
1. Click the "Edit" button next to the book you want to update.
2. Modify the details in the form and click "Save" to update the book information.

### Deleting a Book
1. Click the "Delete" button next to the book you want to remove.
2. Confirm the deletion in the prompt.

### Searching for Books
1. Use the search bar at the top of the book list and filter books by title, author, or genre.
2. Results will update dynamically as you type.

---

## Makefile Commands
- **Setup All Services**:
  ```bash
  make setup
  ```
- **Setup Database Only**:
  ```bash
  make setup-db
  ```
- **Run Backend Only**:
  ```bash
  make run-backend
  ```
- **Run Frontend Only**:
  ```bash
  make run-frontend
  ```
- **Run Both Services**:
  ```bash
  make run
  ```

---

## Troubleshooting
1. **Database Connection Issues**:
   - Ensure PostgreSQL is running and your `.env` file is correctly configured.

2. **Docker Issues**:
   - Make sure Docker is installed and running. Use `docker ps` to check if your containers are running.

3. **Virtual Environment Issues**:
   - Make sure to activate the virtual environment before running backend commands.

4. **Frontend Not Loading**:
   - Ensure all dependencies are installed (`npm install`).

5. **Make Not Recognized on Windows**:
   - Use **Git Bash** or install `make` via [Chocolatey](https://chocolatey.org/):
     ```bash
     choco install make
     ```