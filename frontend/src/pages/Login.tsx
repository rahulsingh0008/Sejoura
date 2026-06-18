import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type LoginProps = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

function Login({ darkMode,
  toggleDarkMode }: LoginProps) {
  return (
    <>
      <Navbar darkMode={darkMode}
  toggleDarkMode={toggleDarkMode} />

      <main className={`max-w-5xl mx-auto p-8 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-white text-black"
      }`}>
        <h1 className="text-4xl font-bold mb-4">Login</h1>

        <p>
          Authentication functionality will be implemented in future weeks.
        </p>
      </main>

      <Footer darkMode={darkMode} />
    </>
  );
}

export default Login;