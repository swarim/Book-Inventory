# Makefile for setting up and running the Book Inventory

# Variables
PYTHON_ENV=./.venv
FRONTEND_DIR=./Frontend
BACKEND_DIR=./Backend

# Check for required tools (platform-specific handling)
check-tools:
ifeq ($(OS),Windows_NT)
	@if not exist "$(shell where psql >nul 2>&1)" echo "Error: 'psql' (PostgreSQL client) is not installed. Please install 'psql'." && exit 1
else
	@command -v psql >/dev/null 2>&1 || { echo "Error: 'psql' (PostgreSQL client) is not installed. Please install 'psql'."; exit 1; }
endif
	@echo "All necessary tools are available."

# Targets
.PHONY: help setup-backend setup-frontend setup-db setup run-backend run-frontend run check-tools

help:
	@echo "Usage:"
	@echo "  make setup          - Set up all services (backend, frontend, and database)"
	@echo "  make setup-db       - Instructions to set up PostgreSQL database"
	@echo "  make setup-backend  - Set up the backend (Python environment and dependencies)"
	@echo "  make setup-frontend - Set up the frontend (Node.js dependencies)"
	@echo "  make run-backend    - Run the backend (Django server)"
	@echo "  make run-frontend   - Run the frontend (React development server)"
	@echo "  make run            - Run both backend and frontend"

# Setup the PostgreSQL database
setup-db: check-tools
	@echo "Setting up the PostgreSQL database..."
	@echo "Make sure PostgreSQL is installed and running on your local machine."
	@echo "Creating database '$(DATABASE_NAME)' and user '$(DATABASE_USER)'..."
	psql -h $(DATABASE_HOST) -p $(DATABASE_PORT) -U postgres -c "CREATE DATABASE $(DATABASE_NAME);" || true
	psql -h $(DATABASE_HOST) -p $(DATABASE_PORT) -U postgres -c "CREATE USER $(DATABASE_USER) WITH PASSWORD '$(DATABASE_PASSWORD)';" || true
	psql -h $(DATABASE_HOST) -p $(DATABASE_PORT) -U postgres -c "GRANT ALL PRIVILEGES ON DATABASE $(DATABASE_NAME) TO $(DATABASE_USER);" || true

# Setup the Python environment and install backend dependencies
setup-backend: check-tools
	@echo "Setting up the Python virtual environment and installing dependencies..."
ifeq ($(OS),Windows_NT)
	python -m venv $(PYTHON_ENV)
	$(PYTHON_ENV)/Scripts/pip install --upgrade pip
	$(PYTHON_ENV)/Scripts/pip install -r $(BACKEND_DIR)/requirements.txt
else
	python3 -m venv $(PYTHON_ENV)
	$(PYTHON_ENV)/bin/pip install --upgrade pip
	$(PYTHON_ENV)/bin/pip install -r $(BACKEND_DIR)/requirements.txt
endif

# Install frontend dependencies
setup-frontend: check-tools
	@echo "Installing frontend dependencies..."
	cd $(FRONTEND_DIR) && npm install

# Setup all services
setup: check-tools setup-db setup-backend setup-frontend

# Run the backend server
run-backend: check-tools
	@echo "Running the Django backend server..."
ifeq ($(OS),Windows_NT)
	cd $(BACKEND_DIR) && $(PYTHON_ENV)/Scripts/python manage.py migrate && $(PYTHON_ENV)/Scripts/python manage.py runserver
else
	cd $(BACKEND_DIR) && $(PYTHON_ENV)/bin/python manage.py migrate && $(PYTHON_ENV)/bin/python manage.py runserver
endif

# Run the frontend server
run-frontend: check-tools
	@echo "Running the React frontend server..."
	cd $(FRONTEND_DIR) && npm start

# Run both backend and frontend
run: run-backend run-frontend
