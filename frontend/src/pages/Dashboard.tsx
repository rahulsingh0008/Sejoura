import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Dashboard() {
  return (
    <>
      <Navbar />

      <main className="max-w-5xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4">Dashboard</h1>

        <p>
          Guest analytics and conversation monitoring will appear here.
        </p>
      </main>

      <Footer />
    </>
  );
}

export default Dashboard;