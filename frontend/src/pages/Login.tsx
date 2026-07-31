import { useState } from "react";
import Footer from "../components/Footer";
import { showToast } from "../components/ui/Toast";

type LoginProps = {
  darkMode: boolean;
};

function Login({
  darkMode,
}: LoginProps) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const response = await fetch(
      `${import.meta.env.VITE_API_URL}/api/auth/login`,
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
      localStorage.setItem("token", data.token);
      localStorage.setItem("email", data.user.email);
      window.location.href = "/dashboard";
      showToast({ message: "Login Successful!", variant: "success" });

      window.location.href = "/dashboard";
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
          <h1 className="text-2xl font-extrabold mb-4">Welcome back</h1>
          <p className="text-sm text-gray-400 mb-6">Sign in to manage queries and access the AI assistant</p>

          <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-input w-full mb-4" />
          <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-input w-full mb-6" />

          <button onClick={login} className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-500 text-white mb-3">Login</button>

          <button onClick={() => { window.location.href = `${import.meta.env.VITE_API_URL}/api/auth/google`; }} className="w-full py-3 rounded-lg border flex items-center justify-center gap-2">
            <svg width="16" height="16" viewBox="0 0 533.5 544.3" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path fill="#4285f4" d="M533.5 278.4c0-18.2-1.6-36.3-4.7-53.6H272v101.3h147.1c-6.4 34.6-25.8 63.9-55 83.6l88.8 69.1c51.8-47.8 82.6-118 82.6-200.4z"/><path fill="#34a853" d="M272 544.3c73.7 0 135.7-24.4 181-66.2l-88.8-69.1c-24.7 16.6-56.3 26.4-92.1 26.4-70.8 0-130.8-47.7-152.2-112.1H29.3v70.5C74.8 487.5 168.4 544.3 272 544.3z"/><path fill="#fbbc04" d="M119.8 325.3c-10.8-32.1-10.8-66.6 0-98.7V156.1H29.3c-39.9 78.5-39.9 171.4 0 250l90.5-80.8z"/><path fill="#ea4335" d="M272 107.7c39.7 0 75.3 13.6 103.5 40.2l77.6-77.6C403.2 24 341.2 0 272 0 168.4 0 74.8 56.8 29.3 142.3l90.5 70.5C141.2 155.4 201.2 107.7 272 107.7z"/></svg>
            Sign in with Google
          </button>

          <div className="mt-4 text-center text-sm">
            <a href="/register" className="text-indigo-500 hover:underline">Create an account</a>
          </div>
        </div>
      </main>

      <Footer darkMode={darkMode} />
    </>
  );
}

export default Login;