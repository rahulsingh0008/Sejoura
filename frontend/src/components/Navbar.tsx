import { Link } from "react-router-dom";

type NavbarProps = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

function Navbar({ darkMode, toggleDarkMode }: NavbarProps) {
  return (
    <nav
      className={
        darkMode
          ? "bg-blue-600 text-white"
          : "bg-blue-600 text-white"
      }
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-2xl font-bold">SEJOURA</h1>

        <div className="flex items-center gap-4 mt-3 md:mt-0">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/queries">Queries</Link>
        <Link to="/login">Login</Link>

        <button
          onClick={toggleDarkMode}
          className="px-3 py-1 bg-white text-blue-600 rounded-lg font-medium"
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </div>
      </div>
    </nav>
  );
}

export default Navbar;