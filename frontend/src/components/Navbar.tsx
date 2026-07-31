import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, Sun, Moon, Home, Info, Grid, MessageSquare, LogOut, LogIn, UserPlus } from "./Icons";

type NavbarProps = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

function Navbar({ darkMode, toggleDarkMode }: NavbarProps) {
  
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(
    !!isLoggedIn
  );

  useEffect(() => {
    setIsLoggedIn(!!isLoggedIn);
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    window.location.href = "/login";
  };

  return (
    <header className={`glass fixed w-full z-40 backdrop-blur-lg ${darkMode ? "bg-slate-950/80 text-white" : "bg-white/30 text-black"}`}>
      <div className="container-max flex items-center justify-between gap-6 py-4">
        <div className="flex items-center gap-4">
          <div className="px-3 py-2 rounded-md bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-bold">
            SEJOURA
          </div>
          <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
            <Link to="/" className={`flex items-center gap-2 px-3 py-2 rounded-md transition ${darkMode ? "text-white hover:bg-white/10" : "text-black hover:bg-black/5"}`}><Home size={16} /> Home</Link>
            <Link to="/about" className={`flex items-center gap-2 px-3 py-2 rounded-md transition ${darkMode ? "text-white hover:bg-white/10" : "text-black hover:bg-black/5"}`}><Info size={16} /> About</Link>
            <Link to="/dashboard" className={`flex items-center gap-2 px-3 py-2 rounded-md transition ${darkMode ? "text-white hover:bg-white/10" : "text-black hover:bg-black/5"}`}><Grid size={16} /> Dashboard</Link>
            <Link to="/queries" className={`flex items-center gap-2 px-3 py-2 rounded-md transition ${darkMode ? "text-white hover:bg-white/10" : "text-black hover:bg-black/5"}`}><MessageSquare size={16} /> Queries</Link>
            <Link to="/ai" className={`flex items-center gap-2 px-3 py-2 rounded-md transition ${darkMode ? "text-white hover:bg-white/10" : "text-black hover:bg-black/5"}`}> <MessageSquare size={16} /> AI Assistant</Link>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle theme"
            className={`p-2 rounded-md transition ${darkMode ? "text-white hover:bg-white/10" : "text-black hover:bg-black/5"}`}
          >
            {darkMode ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {localStorage.getItem("token") ? (
            <button onClick={logout} className="hidden sm:inline-flex items-center gap-2 px-3 py-2 bg-red-600 text-white rounded-md hover:opacity-95 transition"> <LogOut size={14} /> Logout</button>
          ) : (
            <div className="hidden sm:flex items-center gap-2">
              <Link to="/login" className="px-3 py-2 rounded-md hover:bg-white/6 transition flex items-center gap-2"><LogIn size={14} /> Login</Link>
              <Link to="/register" className="px-3 py-2 rounded-md bg-indigo-600 text-white hover:opacity-95 transition flex items-center gap-2"><UserPlus size={14} /> Register</Link>
            </div>
          )}

          {/* Mobile menu */}
          <button className={`md:hidden p-2 rounded-md transition ${darkMode ? "text-white hover:bg-white/10" : "text-black hover:bg-black/5"}`} onClick={() => setOpen((s) => !s)} aria-label="Open menu">
            <Menu size={18} />
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <div className={`md:hidden w-full border-t ${darkMode ? "border-white/10" : "border-black/10"} ${darkMode ? "bg-slate-950/95" : "bg-white/80"}` }>
          <div className="flex flex-col p-4 gap-2">
            <Link to="/" onClick={() => setOpen(false)} className={`px-3 py-2 rounded-md transition flex items-center gap-2 ${darkMode ? "text-white hover:bg-white/10" : "text-black hover:bg-black/5"}`}><Home size={16} /> Home</Link>
            <Link to="/about" onClick={() => setOpen(false)} className={`px-3 py-2 rounded-md transition flex items-center gap-2 ${darkMode ? "text-white hover:bg-white/10" : "text-black hover:bg-black/5"}`}><Info size={16} /> About</Link>
            <Link to="/dashboard" onClick={() => setOpen(false)} className={`px-3 py-2 rounded-md transition flex items-center gap-2 ${darkMode ? "text-white hover:bg-white/10" : "text-black hover:bg-black/5"}`}><Grid size={16} /> Dashboard</Link>
            <Link to="/queries" onClick={() => setOpen(false)} className={`px-3 py-2 rounded-md transition flex items-center gap-2 ${darkMode ? "text-white hover:bg-white/10" : "text-black hover:bg-black/5"}`}><MessageSquare size={16} /> Queries</Link>
            <Link to="/ai" onClick={() => setOpen(false)} className={`px-3 py-2 rounded-md transition flex items-center gap-2 ${darkMode ? "text-white hover:bg-white/10" : "text-black hover:bg-black/5"}`}><MessageSquare size={16} /> AI Assistant</Link>
            {localStorage.getItem("token") ? (
              <button onClick={logout} className={`w-full text-left px-3 py-2 rounded-md transition flex items-center gap-2 ${darkMode ? "text-white hover:bg-white/10" : "text-black hover:bg-black/5"}`}> <LogOut size={14} /> Logout</button>
            ) : (
              <div className="flex gap-2">
                <Link to="/login" onClick={() => setOpen(false)} className={`flex-1 px-3 py-2 rounded-md transition flex items-center gap-2 ${darkMode ? "text-white hover:bg-white/10" : "text-black hover:bg-black/5"}`}><LogIn size={14} /> Login</Link>
                <Link to="/register" onClick={() => setOpen(false)} className="flex-1 px-3 py-2 rounded-md bg-indigo-600 text-white hover:opacity-95 transition flex items-center gap-2"><UserPlus size={14} /> Register</Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;