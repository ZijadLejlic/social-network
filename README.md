# Hexa – Social Network for Ethical Hackers

## 📌 Overview

Hexa is a simple social network web application where users can:

- Register and log in
- Create, like, and delete posts
- Comment on posts
- Edit or delete their profile

This project is built as a learning exercise to understand frontend-backend interaction and will be upgraded to a full-stack application using Spring Boot.

---

## 🚀 Features

### 👤 Authentication

- User registration
- User login
- Session handling via cookies

### 📝 Posts

- Create new posts
- Like posts
- Delete own posts
- View all posts

### 💬 Comments

- Add comments to posts

### ⚙️ User Profile

- Edit account details
- Delete account

---

## 🛠️ Tech Stack

### Frontend

- HTML
- CSS
- JavaScript (Vanilla)
- Bootstrap

### Backend (Current)

- MockAPI (for testing REST endpoints)

### Backend (Planned Upgrade)

- Java
- Spring Boot
- PostgreSQL
- JWT Authentication
- Spring Security

---

## 📂 Project Structure

- `index.html` – Login & Registration page
- `hexa.html` – Main app (posts & profile)
- `style.css` – Styling
- `app.js` – Login & registration logic
- `hexa.js` – Main app logic
- `User.js` – User-related API calls
- `Post.js` – Post-related API calls
- `Comment.js` – Comment-related API calls
- `Session.js` – Cookie-based session handling
- `Validator.js` – Form validation logic

---

## ⚠️ Known Limitations

- Passwords are stored in plain text (not secure)
- Authentication is handled on the frontend (not secure)
- Uses MockAPI instead of a real backend
- No authorization protection on API routes

---

## 🔄 Future Improvements

- Implement backend with Spring Boot
- Add JWT-based authentication
- Encrypt passwords using BCrypt
- Introduce role-based authorization
- Connect to PostgreSQL database
- Improve UI/UX

---

## 🎯 Goal of the Project

The goal of this project is to:

- Practice JavaScript fundamentals
- Understand REST API communication
- Prepare for full-stack development with Java (Spring Boot)

---
