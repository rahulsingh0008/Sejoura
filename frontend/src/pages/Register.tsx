import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type RegisterProps = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

function Register({
  darkMode,
  toggleDarkMode,
}: RegisterProps) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    const response = await fetch(
      "http://localhost:5000/api/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );

    const data = await response.json();

    if (response.ok) {
      alert("Registration Successful!");
      navigate("/login");
    } else {
      if (data.errors && data.errors.length > 0) {
        alert(data.errors[0].msg);
      } else {
        alert(data.message);
      }
    }
  };

  return (
    <>
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />

      <main className="max-w-md mx-auto mt-12 p-6 border rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold mb-6">
          Register
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="border w-full p-3 rounded mb-4 text-black"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="border w-full p-3 rounded mb-6 text-black"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={register}
          className="w-full bg-blue-600 text-white py-3 rounded-lg"
        >
          Register
        </button>
      </main>

      <Footer darkMode={darkMode} />
    </>
  );
}

export default Register;