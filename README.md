# 🌿 Sejoura – AI-Powered Guest Support Assistant

An AI-powered full-stack web application designed for homestays and eco-tourism businesses. Sejoura helps guests get instant travel assistance, manage queries, and receive AI-generated recommendations using Google Gemini.

---

## 📌 Features

### 🔐 Authentication
- User Registration
- User Login
- Google OAuth Login
- JWT Authentication
- Protected Routes
- Logout
- Password Hashing with bcrypt
- Rate Limiting for Authentication

### 👥 Guest Query Management
- Create Guest Queries
- View Guest Queries
- Update Query Status
- Delete Guest Queries
- Search Queries

### 🤖 AI Guest Assistant
- Google Gemini API Integration
- Travel Recommendations
- Homestay Assistance
- Tourist Attraction Suggestions
- Itinerary Planning
- AI-powered Guest Support
- Loading State
- Error Handling

### 🎨 Frontend
- Responsive Design
- Dark / Light Mode
- Reusable UI Components
- React Router Navigation
- Toast Notifications
- Loader Component

---

# 🛠 Tech Stack

## Frontend

- React
- TypeScript
- Tailwind CSS
- React Router DOM
- Vite

## Backend

- Node.js
- Express.js
- Prisma ORM
- PostgreSQL (Supabase)

## Authentication

- JWT
- Passport.js
- Google OAuth 2.0
- bcrypt

## AI

- Google Gemini API
- @google/genai

---

# 📂 Project Structure

```
Sejoura
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── routes
│   │   ├── services
│   │   └── App.tsx
│   │
│   └── package.json
│
├── backend
│   ├── src
│   │   ├── config
│   │   ├── controllers
│   │   ├── middleware
│   │   ├── routes
│   │   ├── services
│   │   ├── prisma
│   │   └── server.js
│   │
│   └── package.json
│
├── README.md
└── PROMPTS.md
```

---

# ⚙ Installation

## Clone Repository

```bash
git clone <repository-url>
```

---

## Backend

```bash
cd backend

npm install
```

Create a `.env` file

```env
DATABASE_URL=your_supabase_database_url

JWT_SECRET=your_jwt_secret

GOOGLE_CLIENT_ID=your_google_client_id

GOOGLE_CLIENT_SECRET=your_google_client_secret

GEMINI_API_KEY=your_gemini_api_key
```

Run

```bash
npm run dev
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

---

# 🔑 Authentication Flow

```
Register
      ↓
Login / Google Login
      ↓
JWT Generated
      ↓
Stored in Local Storage
      ↓
Protected Routes
      ↓
Protected API Calls
```

---

# 🤖 AI Workflow

```
User Question
      ↓
Frontend
      ↓
POST /api/ai/chat
      ↓
Express Backend
      ↓
Google Gemini API
      ↓
Formatted Response
      ↓
Frontend Display
```

---

# 📡 API Endpoints

## Authentication

| Method | Endpoint |
|----------|----------------------------|
| POST | /api/auth/register |
| POST | /api/auth/login |
| GET | /api/auth/google |
| GET | /api/auth/google/callback |

---

## Guest Queries

| Method | Endpoint |
|----------|--------------------------|
| GET | /api/queries |
| GET | /api/queries/:id |
| POST | /api/queries |
| PUT | /api/queries/:id |
| DELETE | /api/queries/:id |
| GET | /api/queries/search |

---

## AI

| Method | Endpoint |
|----------|----------------|
| POST | /api/ai/chat |

---

# 🗄 Database Schema

## User

| Field | Type |
|--------|------|
| id | Int |
| email | String |
| password | String |
| createdAt | DateTime |

---

## GuestQuery

| Field | Type |
|--------|------|
| id | Int |
| guestName | String |
| query | String |
| status | String |
| createdAt | DateTime |

---

# 🔒 Security

- JWT Authentication
- Password Hashing (bcrypt)
- Google OAuth
- Protected Routes
- Protected API Endpoints
- Environment Variables
- Express Rate Limiting
- Prisma ORM

---

# 🚀 Future Enhancements

- Booking Management
- Email Notifications
- Multi-language AI Support
- Voice-based AI Assistant
- Admin Dashboard
- AI Chat History
- AI Recommendation Engine
- Hotel Analytics Dashboard

---

# 📸 Screenshots

- Home Page
- Dashboard
- Guest Queries
- Login
- Google OAuth
- AI Assistant
- AI Response
- Network Requests

---

# 📚 Learning Outcomes

- Full Stack Development
- REST API Design
- Authentication & Authorization
- Database Management
- Prisma ORM
- Google OAuth
- AI API Integration
- Prompt Engineering
- Responsive UI Design
- Secure API Development

---

# 👨‍💻 Author

**Rahul Singh**

B.Tech Computer Science Engineering

Graphic Era Deemed to be University

---

# 📄 License

This project was developed as part of the **Technical Business Incubator (TBI)** Internship Program.
