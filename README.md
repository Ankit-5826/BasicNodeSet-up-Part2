# Product Requirements Document (PRD)

## Basic Node Set-up – Part 2

### 1. Objective

The objective of **Part 2** is to extend the basic Express setup by introducing **database connectivity, standardized API responses, error handling, and core utilities** required for a production-ready backend.

This phase focuses on **stability, consistency, and scalability**, not feature richness.

---

### 2. Scope of Part 2

This part includes:

* MongoDB integration using Mongoose
* Centralized database connection handling
* Standard API response and error formats
* Global constants management
* Basic health check API
* Async error handling utility

These components form the **foundation layer** for all future APIs.

---

## 3. Functional Requirements

### 3.1 Mongoose Installation

**Requirement**
Install Mongoose as the ODM (Object Data Modeling) library for MongoDB.

```bash
npm install mongoose
```

**Purpose / Why Important**

* Provides schema-based data modeling
* Handles validation at the database layer
* Simplifies CRUD operations
* Prevents unstructured and inconsistent data

Without Mongoose, MongoDB usage becomes error-prone and unmaintainable at scale.

---

### 3.2 Database Connection Setup

**Requirement**
Create a centralized database connection module.

**Location Example**

```
src/db/index.js
```

**Responsibilities**

* Read MongoDB URI from environment variables
* Establish connection during app startup
* Handle connection success and failure explicitly
* Prevent server start if DB connection fails

**Why This Matters**

* Ensures the app never runs without a database
* Centralizes DB logic (no scattered connections)
* Makes testing and environment switching easier

This is non-negotiable for production-grade systems.

---

### 3.3 API Response Class

**Requirement**
Create a reusable `ApiResponse` class.

**Purpose**

* Enforce a consistent API response structure
* Avoid ad-hoc JSON responses across controllers

**Typical Structure**

* `statusCode`
* `data`
* `message`
* `success`

**Why Important**

* Frontend can reliably parse responses
* Reduces duplication in controllers
* Improves API readability and documentation

Inconsistent responses break frontend logic and increase debugging time.

---

### 3.4 API Error Class

**Requirement**
Create a custom `ApiError` class extending `Error`.

**Purpose**

* Standardize error handling across the application
* Attach HTTP status codes to errors
* Separate operational errors from unknown crashes

**Key Benefits**

* Predictable error responses
* Cleaner controller logic
* Centralized error middleware compatibility

Throwing raw errors is amateur-level practice. This avoids that.

---

### 3.5 Constants File

**Requirement**
Add a centralized constants file.

**Location Example**

```
src/constants.js
```

**Use Cases**

* HTTP status codes
* Common messages
* Environment-independent values

**Why This Exists**

* Avoids magic numbers and strings
* Makes updates safe and global
* Improves code readability

Hardcoding values across files leads to silent bugs.

---

### 3.6 Health Check API

**Requirement**
Implement a basic health check endpoint.

**Example**

```
GET /api/v1/health
```

**Expected Behavior**

* Returns server status
* Confirms API is running
* Optionally confirms DB connectivity

**Why It Matters**

* Used by load balancers
* Required for monitoring tools
* First debugging checkpoint in production

Every serious backend must have this.

---

### 3.7 Async Handler Utility

**Requirement**
Create a reusable `asyncHandler` utility.

**Purpose**

* Wrap async route handlers
* Automatically forward errors to Express error middleware

**Problem It Solves**

* Eliminates repetitive try-catch blocks
* Prevents unhandled promise rejections

**Why Important**

Uncaught async errors crash servers. This is a defensive requirement, not an optimization.

---

## 4. Non-Functional Requirements

* Code must be modular and reusable
* No direct DB logic inside controllers
* All APIs must use ApiResponse and ApiError
* No async controller without asyncHandler

---



---

## 5. Outcome of Part 2

After completing Part 2, the project will:

* Be safely connected to MongoDB
* Handle errors consistently
* Return predictable API responses
* Be ready for real feature development

This completes the **backend foundation layer**.
