# 🚀 EMS Pro - Employee Management System

<div align="center">

### A Full Stack Employee Management System Built with MERN Architecture

Manage Employees • Departments • Managers • Attendance • Leaves • Payroll • Reports • Settings

---

![React](https://img.shields.io/badge/Frontend-React-blue)
![NodeJS](https://img.shields.io/badge/Backend-Node.js-green)
![Express](https://img.shields.io/badge/API-Express-black)
![MongoDB](https://img.shields.io/badge/Database-PostgreSQL-blue)
![Prisma](https://img.shields.io/badge/ORM-Prisma-purple)
![JWT](https://img.shields.io/badge/Auth-JWT-orange)

</div>

---

# 📖 Overview

EMS Pro is a modern Employee Management System designed to simplify workforce management through role-based access control and centralized administration.

The system provides dedicated portals for:

* 👨‍💼 Administrator
* 👨‍💻 Manager
* 👩‍💻 Employee

The project focuses on real-world HR operations including employee management, department allocation, attendance tracking, leave management, payroll processing, reporting, and system administration.

---

# ✨ Core Features

## 🔐 Authentication & Authorization

* JWT Authentication
* Secure Password Hashing using BCrypt
* Role Based Access Control (RBAC)
* Admin Access
* Manager Access
* Employee Access
* Protected Routes
* Session Management
* User Status Management

---

# 👨‍💼 Admin Portal

The Administrator has complete control over the organization.

## Employee Management

* Create Employees
* Update Employee Information
* Activate Employees
* Deactivate Employees
* View Employee Details
* Employee Search
* Employee Status Filters
* Employee Profile Management
* Auto Generated Employee Codes

### Example

```text
EMP001
EMP002
EMP003
```

---

## Manager Management

* Create Managers
* Update Managers
* Activate Managers
* Deactivate Managers
* Assign Managers to Departments
* View Manager Information
* Auto Generated Manager Codes

### Example

```text
MGR001
MGR002
MGR003
```

---

## Department Management

* Create Departments
* Update Departments
* Activate Departments
* Deactivate Departments
* Assign Managers
* Manage Department Structure
* Department Overview

---

## Attendance Management

* Mark Attendance
* Present / Absent Tracking
* Employee Attendance History
* Attendance Monitoring
* Attendance Statistics

---

## Leave Management

* View Leave Requests
* Approve Manager Leave Requests
* Reject Manager Leave Requests
* Leave Status Tracking

### Status Types

```text
PENDING
APPROVED
REJECTED
```

---

## Payroll Management

* Generate Payroll
* Monthly Salary Processing
* Salary Breakdown
* Bonus Management
* Tax Management
* Deduction Management
* Net Salary Calculation
* Payment Status Tracking

### Payroll Formula

```text
Net Salary =
Basic Salary
+ Bonus
- Tax
- Deductions
```

---

## Reports & Analytics

* Employee Statistics
* Department Statistics
* Payroll Overview
* Attendance Reports
* Leave Reports
* Organizational Insights
* Dashboard Analytics

---

## Settings Management

* Profile Management
* Password Management
* Company Information
* Company Branding
* Theme Settings
* Email Notification Preferences

---

# 👨‍💼 Manager Portal

Managers can manage their assigned departments and employees.

---

## Manager Dashboard

* Department Overview
* Team Statistics
* Attendance Summary
* Leave Summary
* Team Insights

---

## Team Management

* View Assigned Employees
* Team Search
* Employee Information
* Department Employee Tracking

---

## Attendance Monitoring

* View Team Attendance
* Attendance Records
* Daily Attendance Tracking
* Attendance Reports

---

## Leave Management

Managers can approve or reject leave requests submitted by employees belonging to their department.

### Actions

```text
Approve Leave
Reject Leave
```

---

## Reports

* Team Statistics
* Attendance Analysis
* Leave Analysis
* Employee Activity Reports

---

## Profile Management

* View Profile
* Update Personal Information
* Department Information
* Contact Details

---

# 👩‍💻 Employee Portal

Employees have access to their own information and records.

---

## Employee Dashboard

* Personal Overview
* Attendance Summary
* Leave Summary
* Payroll Summary

---

## My Attendance

* View Attendance Records
* Attendance History
* Personal Attendance Tracking

---

## My Leaves

* Apply for Leave
* View Leave Requests
* Track Leave Status

---

## My Payroll

* View Salary Records
* Payroll History
* Monthly Salary Details

---

## My Profile

* Personal Information
* Contact Information
* Employment Details

---

# 🗄️ Database Design

The application follows a relational architecture using PostgreSQL and Prisma ORM.

## Main Entities

### User

```text
Admin
Manager
Employee
```

### Employee

```text
Personal Details
Designation
Salary
Department
```

### Department

```text
Department Information
Assigned Manager
Employees
```

### Attendance

```text
Date
Check-In
Check-Out
Status
```

### Leave

```text
Leave Type
Start Date
End Date
Reason
Status
```

### Payroll

```text
Salary
Bonus
Tax
Deductions
Net Salary
```

### System Settings

```text
Company Name
Logo
Theme
Notifications
```

---

# 🛠️ Tech Stack

## Frontend

* React.js
* React Router DOM
* Zustand
* Axios
* Tailwind CSS
* React Hot Toast
* Lucide React

---

## Backend

* Node.js
* Express.js
* JWT Authentication
* BCrypt
* Zod Validation

---

## Database

* PostgreSQL
* Prisma ORM

---

## Development Tools

* VS Code
* Git
* GitHub
* Postman
* Prisma Studio

---

# 🎯 Key Concepts Implemented

* Full Stack Development
* REST API Architecture
* JWT Authentication
* Role Based Access Control
* Database Relationships
* Prisma ORM
* Form Validation
* State Management
* CRUD Operations
* Protected Routing
* Dashboard Analytics
* Modular Architecture
* Responsive Design

---

# 📊 Project Status

### Completed Modules

* Authentication
* Employee Management
* Manager Management
* Department Management
* Attendance Module
* Leave Module
* Payroll Module
* Reports Module
* Settings Module
* Manager Portal Backend
* Employee Portal Backend
* Manager Portal Frontend
* Employee Portal Frontend

---

# 🎓 Purpose

This project was built as a learning-focused enterprise-level application to gain hands-on experience with:

* Full Stack Development
* Modern React Architecture
* Backend API Development
* Database Design
* Authentication Systems
* Role Based Access Control
* Real World HRMS Workflows
* Software Engineering Best Practices

---

<div align="center">

### ⭐ If you like this project, consider giving it a star!

**Built with ❤️ using React, Node.js, PostgreSQL, Prisma & Tailwind CSS**

</div>
