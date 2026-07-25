import { Routes, Route } from "react-router-dom";

import Queries from "./pages/Queries";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import ComponentsDemo from "./pages/ComponentsDemo";
import { useEffect, useState } from "react";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginSuccess from "./pages/LoginSuccess";
import AIAssistant from "./pages/AIAssistant";
import ToastProvider from "./components/ui/Toast";
import Navbar from "./components/Navbar";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <ToastProvider>
      <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
      <div
        className={
          (darkMode
            ? "bg-gray-900 text-white min-h-screen"
            : "bg-white text-black min-h-screen") + " app-with-header"
        }
      >
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/about" element={<About darkMode={darkMode} />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard darkMode={darkMode} />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login darkMode={darkMode} />} />
          <Route
            path="/components-demo"
            element={<ComponentsDemo darkMode={darkMode} />}
          />
          <Route
            path="/queries"
            element={
              <ProtectedRoute>
                <Queries darkMode={darkMode} />
              </ProtectedRoute>
            }
          />
          <Route
            path="/register"
            element={
              <Register darkMode={darkMode} />
            }
          />
          <Route
            path="/login-success"
            element={<LoginSuccess />}
          />
          <Route
            path="/ai"
            element={
              <ProtectedRoute>
                <AIAssistant darkMode={darkMode} />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </ToastProvider>
  );
}

export default App;