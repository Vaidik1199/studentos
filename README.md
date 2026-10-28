<div align="center">

# 🎓 StudentOS

<p align="center">
  <a href="https://studentoson.vercel.app" target="_blank" rel="noopener noreferrer">
    <strong>🌐 Live Demo</strong>
  </a>
</p>

### AI-Powered Student Productivity Platform

<p align="center">
  <strong>Organize • Learn • Track • Achieve</strong>
</p>

<p align="center">
  A modern full-stack productivity platform designed to help students manage academics, stay organized, and improve learning with the power of Artificial Intelligence.
</p>

---

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb)
![JWT](https://img.shields.io/badge/JWT-black?style=for-the-badge)
![Google OAuth](https://img.shields.io/badge/Google_OAuth-4285F4?style=for-the-badge&logo=google)
![Gemini AI](https://img.shields.io/badge/Gemini_AI-8E75FF?style=for-the-badge)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwind-css)
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge)
![Vercel](https://img.shields.io/badge/Vercel-black?style=for-the-badge&logo=vercel)
![Render](https://img.shields.io/badge/Render-46E3B7?style=for-the-badge)

</div>

---

# 📖 Overview

StudentOS is a full-stack AI-powered student productivity platform built to simplify academic life through a single centralized dashboard.

Instead of using multiple applications for notes, assignments, attendance tracking, task management, study planning, and AI assistance, StudentOS combines everything into one intelligent workspace.

The platform emphasizes secure authentication, responsive design, scalable backend architecture, and seamless AI integration to provide students with a productive and modern learning experience.

---

# ✨ Key Features

### 🔐 Authentication & Security

- JWT Authentication
- Google OAuth 2.0 Login
- Email OTP Verification
- Protected Routes
- Password Hashing
- Persistent User Sessions
- Secure REST APIs

---

### 🤖 AI Assistant

- Powered by Google Gemini AI
- Intelligent Academic Assistance
- Study Guidance
- Productivity Support
- Natural Language Conversations

---

### 📚 Student Management

- Notes Management
- Assignment Tracking
- Attendance Management
- Study Planner
- Daily Task Manager
- Academic Dashboard

---

### ☁ Cloud Integration

- Cloudinary Image Uploads
- Secure Media Storage
- Optimized Asset Management

---

### 🎨 Modern UI

- Responsive Design
- Mobile Friendly
- Reusable React Components
- Modern Dashboard Interface
- Clean User Experience

---

# 🚀 Tech Stack

## Frontend

- React.js
- JavaScript (ES6+)
- Tailwind CSS
- React Router
- Axios

---

## Backend

- Node.js
- Express.js
- REST API Architecture
- JWT Authentication
- Nodemailer

---

## Database

- MongoDB Atlas
- Mongoose ODM

---

## AI & Cloud Services

- Google Gemini AI API
- Cloudinary
- Google OAuth 2.0

---

## Deployment

- Frontend → Vercel
- Backend → Render
- Database → MongoDB Atlas

---

# 🏗 Project Architecture

```

Client (React)

↓ REST APIs

Express Server

↓ Mongoose ODM

MongoDB Atlas

↓

Google Gemini AI

↓

Cloudinary

↓

Google OAuth

```

---

# 📂 Folder Structure

```

StudentOS/
│
├── frontend/
│ ├── src/
│ ├── components/
│ ├── pages/
│ ├── context/
│ ├── hooks/
│ ├── services/
│ └── assets/
│
├── backend/
│ ├── src/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ ├── config/
│ ├── utils/
│ └── services/
│
└── README.md

```
# ⚙️ Getting Started

## Prerequisites

Before running the project, ensure the following are installed:

- Node.js (v18+)
- npm
- MongoDB Atlas Account
- Google Cloud Console Project
- Gemini API Key
- Cloudinary Account

---

# 📦 Installation

## Clone Repository

```bash
git clone https://github.com/your-username/studentos.git

cd studentos
```

## Install Frontend

```bash
cd frontend
npm install
```

## Install Backend

```bash
cd ../backend
npm install
```

---

# 🔑 Environment Variables

Create a `.env` file inside the backend directory.

```env
PORT=

MONGODB_URI=

JWT_SECRET=

GOOGLE_CLIENT_ID=

EMAIL_USER=
EMAIL_PASS=

GEMINI_API_KEY=

CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=

CLIENT_URL=
```

---

# ▶ Running the Application

## Start Backend

```bash
cd backend

npm run dev
```

## Start Frontend

```bash
cd frontend

npm run dev
```

The application will be available at

```
Frontend
http://localhost:5173

Backend
http://localhost:8000
```

---

# 🌟 Core Functionalities

### Authentication

- Email OTP Verification
- Google OAuth Login
- JWT Authentication
- Password Encryption
- Protected Routes

---

### Student Dashboard

- Personalized Dashboard
- Academic Overview
- Responsive Interface

---

### Notes

- Create Notes
- Edit Notes
- Delete Notes
- Organize Notes

---

### Assignments

- Track Assignments
- Update Status
- Manage Deadlines

---

### Attendance

- Record Attendance
- View Attendance Statistics

---

### Study Planner

- Organize Daily Study Schedule
- Manage Study Goals

---

### Task Manager

- Create Tasks
- Update Tasks
- Delete Tasks
- Track Progress

---

### AI Assistant

- Ask Academic Questions
- Study Guidance
- Productivity Suggestions
- Natural Conversations using Gemini AI

---

### Media Upload

- Upload Images
- Secure Cloud Storage
- Cloudinary Integration

---

# 📈 Highlights

- Modular Project Architecture
- Reusable React Components
- RESTful API Design
- Secure Authentication
- Responsive User Interface
- AI Integration
- Cloud Media Storage
- Production Deployment
- Environment-based Configuration
- Scalable Backend Structure

---

# 🔒 Security

- JWT Authentication
- Password Hashing
- Protected API Routes
- Environment Variables
- Secure Authentication Flow

---

# 🚀 Future Enhancements

- Study Analytics Dashboard
- Calendar Integration
- Push Notifications
- Real-time Collaboration
- AI-generated Notes
- AI Quiz Generator
- Pomodoro Timer
- Dark / Light Theme
- Progressive Web App (PWA)
- Mobile Application


---

# 💡 Why StudentOS?

StudentOS was built to solve the everyday academic challenges students face by combining productivity tools and Artificial Intelligence into one unified platform. Instead of switching between multiple[...]

---

# 🤝 Contributing

Contributions are always welcome.

If you'd like to improve StudentOS:

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Added new feature"
```

4. Push your branch

```bash
git push origin feature-name
```

5. Open a Pull Request

---

# 📄 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

**Vaidik Choudhary**

AI & Data Science Undergraduate

Full Stack Developer

📧 Email: vaidikhc@gmail.com

💼 LinkedIn: https://linkedin.com/in/vaidikchoudhary

🌐 Portfolio: https://vaidikchoudhary.vercel.app

🐙 GitHub: https://github.com/Vaidik1199

---

# ⭐ Support

If you found this project helpful,

please consider giving it a ⭐ on GitHub.

It motivates me to build more useful open-source projects.

---

<div align="center">

### Made with ❤️ using React, Node.js, Express, MongoDB & Gemini AI

</div>

"}]} ... we need valid JSON. Actually must provide proper file objects. We included an extra ... due to accidental. Need resend with proper JSON. Let's ensure valid. We'll just include a single file object. Need careful JSON string quoting. Use push_files with files array. Works. Let's do it. Need if not too huge. fine. Let's provide content exactly with added live link. We should not overdo; file content big but okay. Let's send valid JSON via functions.push_files. I'll craft carefully with escapes. Need not include ... or trailing broken. Let's do. Use content string with 
 not actual newlines? yes JSON allows actual newline if using string value in tool param as object; in our call we can provide content as raw multiline string. Should be valid in JSON. Let's do. We'll keep as normal because chat tool handles JSON. Need ensure no accidental unescaped double quote inside. We'll use standard JSON literal with double quotes around the string; internal newlines are okay as actual whitespace in JSON? It requires escaped newlines, but when using tool call interface, we as assistant send structured data object not raw JSON string; so multiline string is okay. So fine. Let's do. We'll avoid huge config. Let's patch. Need not mention repository not known? It's known. Good. Let's proceed. We'll send with `content` long value. It will work. Need maybe use `create_or_update_file` with sha null? But push_files is simpler. Let's go. Output after action: 