import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type DashboardProps = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

function Dashboard({ darkMode,
  toggleDarkMode }: DashboardProps) {
  return (
    <>
      <Navbar darkMode={darkMode}
  toggleDarkMode={toggleDarkMode} />

      <main className={`max-w-5xl mx-auto p-8 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-white text-black"
      }`}>
        <h1 className="text-4xl font-bold mb-4">Dashboard</h1>

        <p>
          Guest analytics and conversation monitoring will appear here.
        </p>
      </main>

      <Footer darkMode={darkMode} />
    </>
  );
}

export default Dashboard;