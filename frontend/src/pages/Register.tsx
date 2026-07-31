import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { showToast } from "../components/ui/Toast";

type RegisterProps = {
  darkMode: boolean;
};

function Register({
  darkMode,
}: RegisterProps) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/auth/register`,
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
      showToast({ message: "Registration Successful!", variant: "success" });
      navigate("/login");
    } else {
      if (data.errors && data.errors.length > 0) {
        showToast({ message: data.errors[0].msg, variant: "error" });
      } else {
        showToast({ message: data.message, variant: "error" });
      }
    }
  };

  return (
    <>

      <main className="min-h-screen flex items-center justify-center p-6">
        <div className="glass max-w-md w-full p-8 rounded-2xl shadow-lg fade-in">
          <h1 className="text-2xl font-extrabold mb-4">Create your account</h1>
          <p className="text-sm text-gray-400 mb-6">Start using Sejoura to manage guest queries and AI features</p>

          <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-input w-full mb-4" />
          <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-input w-full mb-6" />

          <button onClick={register} className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-500 text-white mb-3">Register</button>

          <div className="mt-4 text-center text-sm">
            <a href="/login" className="text-indigo-500 hover:underline">Already have an account? Sign in</a>
          </div>
        </div>
      </main>

      <Footer darkMode={darkMode} />
    </>
  );
}

export default Register;