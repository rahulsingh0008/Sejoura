# 🌿 Sejoura – AI-Powered Guest Support Assistant

An AI-powered full-stack web application designed for homestays and eco-tourism businesses. Sejoura helps guests get instant travel assistance, manage guest queries, and receive AI-powered travel recommendations using Google Gemini.

---

# 🌐 Live Deployment

## Frontend

 https://sejoura-frontend.vercel.app

## Backend

https://sejoura-backend.onrender.com

---

# 📌 Features

## 🔐 Authentication

- User Registration
- User Login
- Google OAuth Login
- JWT Authentication
- Protected Routes
- Logout
- Password Hashing using bcrypt
- Express Rate Limiting
- Input Validation

---

## 👥 Guest Query Management

- Create Guest Queries
- View Guest Queries
- Update Guest Query Status
- Delete Guest Queries
- Search Guest Queries
- Protected CRUD Operations

---

## 🤖 AI Guest Assistant

- Google Gemini Integration
- AI-powered Guest Support
- Travel Recommendations
- Tourist Attraction Suggestions
- Homestay Assistance
- Itinerary Planning
- Loading State
- Error Handling
- Prompt Engineering

---

## 🎨 Frontend

- Responsive Design
- Dark / Light Theme
- Dashboard
- Protected Pages
- Toast Notifications
- Loader Component
- Error Boundary
- Reusable Components

---

# 🛠 Tech Stack

## Frontend

- React
- TypeScript
- Tailwind CSS
- React Router
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

```text
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
│   ├── prisma
│   ├── src
│   │   ├── config
│   │   ├── controllers
│   │   ├── middleware
│   │   ├── routes
│   │   ├── services
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
DATABASE_URL=your_database_url
DIRECT_URL=your_direct_database_url
JWT_SECRET=your_jwt_secret

GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

GEMINI_API_KEY=your_gemini_api_key

CLIENT_URL=http://localhost:5173
```

Run

```bash
npm run dev
```

---

## Frontend

Create

```env
VITE_API_URL=http://localhost:5000
```

Run

```bash
cd frontend

npm install

npm run dev
```

---

# 🔐 Authentication Flow

```text
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

```text
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
AI Response
      ↓
Frontend Display
```

---

# 📡 REST API

## Authentication

| Method | Endpoint |
|---------|----------|
| POST | /api/auth/register |
| POST | /api/auth/login |
| GET | /api/auth/google |
| GET | /api/auth/google/callback |

---

## Guest Queries

| Method | Endpoint |
|---------|----------|
| GET | /api/queries |
| GET | /api/queries/:id |
| POST | /api/queries |
| PUT | /api/queries/:id |
| DELETE | /api/queries/:id |
| GET | /api/queries/search |

---

## AI

| Method | Endpoint |
|---------|----------|
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
- Google OAuth 2.0
- Protected Routes
- Protected API Endpoints
- Environment Variables
- Express Rate Limiting
- Prisma ORM
- Input Validation
- CORS Configuration

---

# 📸 Screenshots

- Home Page
- Dashboard
- Login
- Google OAuth
- Guest Queries
- AI Assistant
- AI Response
- Network Requests

---

# 🚀 Deployment

## Frontend

- Hosted on **Vercel**

## Backend

- Hosted on **Render**

## Database

- Hosted on **Supabase PostgreSQL**

---

# ⚠ Known Limitations

- Render free tier spins down after periods of inactivity.
- The first backend request after idle may take **30–60 seconds** while the service wakes up.

---

# 🚀 Future Enhancements

- Booking Management
- Admin Dashboard
- AI Chat History
- Voice-based AI Assistant
- Multi-language Support
- Email Notifications
- Recommendation Engine
- Hotel Analytics Dashboard

---

# 📚 Learning Outcomes

- React Development
- Express.js REST APIs
- PostgreSQL Database Design
- Prisma ORM
- JWT Authentication
- Google OAuth
- AI API Integration
- Prompt Engineering
- Secure Backend Development
- Full Stack Deployment
- Responsive UI Design

---

# 👨‍💻 Author

**Rahul Singh**

B.Tech Computer Science Engineering

Graphic Era Deemed to be University

---

# 📄 License

This project was developed as part of the **Technical Business Incubator (TBI) Internship Program**.