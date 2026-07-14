import { Routes, Route } from "react-router-dom";

import Queries from "./pages/Queries";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ComponentsDemo from "./pages/ComponentsDemo";
import { useState } from "react";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginSuccess from "./pages/LoginSuccess";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={
        darkMode
          ? "bg-gray-900 text-white min-h-screen"
          : "bg-white text-black min-h-screen"
      }
    >
      <Routes>
        <Route path="/" element={<Home
          darkMode={darkMode}
          toggleDarkMode={() => setDarkMode(!darkMode)}
        />} />
        <Route path="/about" element={<About
          darkMode={darkMode}
          toggleDarkMode={() => setDarkMode(!darkMode)}
        />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard
                darkMode={darkMode}
                toggleDarkMode={() => setDarkMode(!darkMode)}
              />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login
          darkMode={darkMode}
          toggleDarkMode={() => setDarkMode(!darkMode)}
        />} />
        <Route
          path="/components-demo"
          element={<ComponentsDemo
          darkMode={darkMode}
          toggleDarkMode={() => setDarkMode(!darkMode)}
        />}
        />
        <Route
          path="/queries"
          element={
            <ProtectedRoute>
              <Queries
                darkMode={darkMode}
                toggleDarkMode={() => setDarkMode(!darkMode)}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/register"
          element={
            <Register
              darkMode={darkMode}
              toggleDarkMode={() => setDarkMode(!darkMode)}
            />
          }
        />
        <Route
          path="/login-success"
          element={<LoginSuccess />}
        />
      </Routes>
    </div>
  );
}

export default App;