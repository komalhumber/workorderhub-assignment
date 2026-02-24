# WorkOrderHub – Assignment 1

## Overview
WorkOrderHub is a simple backend API for managing internal work orders.  
It allows creating, viewing, updating, deleting, and changing the status of work orders.

This project follows a clean layered architecture:
- Routes
- Controllers
- Services
- Middleware
- Utilities
- In-memory data store

---

## Tech Stack
- Node.js
- Express.js
- UUID
- Nodemon

---

## Setup Instructions

1. Clone the repository
2. Navigate to backend folder
3. Install dependencies

4. Run the server

Server runs on:

---

## API Security

All endpoints require an API key header:



---

## Available Endpoints

### Create Work Order
POST /api/workorders

### Get All Work Orders
GET /api/workorders

### Get Work Order By ID
GET /api/workorders/:id

### Update Work Order
PUT /api/workorders/:id

### Delete Work Order
DELETE /api/workorders/:id

### Update Status
PATCH /api/workorders/:id/status

---

## Notes

- Data is stored in memory.
- Restarting the server resets all work orders.
- Centralized error handling is implemented.
