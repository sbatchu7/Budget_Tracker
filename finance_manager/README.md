
# Personal Finance Manager with Budget Tracking

A full-stack application to manage personal finances with features like transaction tracking, budget management, and insights visualization. It uses Plaid API to import banking transactions, AWS Lambda for data processing, and PostgreSQL for data persistence.

## Features

- Transaction import from bank accounts via Plaid API
- Budget management and expense tracking
- Interactive dashboards for financial insights
- Real-time data processing with AWS Lambda

## Technologies Used

- **Backend**: Node.js, Express, Sequelize, Plaid API
- **Frontend**: React, React Router
- **Database**: PostgreSQL
- **AWS**: Lambda, S3
- **Containerization**: Docker, Docker Compose

## Getting Started

Clone the repository and set up the environment variables as defined in `backend/.env`. Use Docker to run the application with `docker-compose up --build`.

## Project Structure

```
finance_manager/
├── backend/                # Backend API
├── frontend/               # Frontend React application
├── aws/                    # AWS Lambda functions
└── Dockerfile              # Docker configuration
```

For more details on each module, refer to the documentation in each sub-directory.
