import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />

      <main className="max-w-5xl mx-auto p-8">
        <h1 className="text-4xl font-bold mb-4">About</h1>

        <p>
          Sejoura helps homestay owners automate guest support using AI.
        </p>
      </main>

      <Footer />
    </>
  );
}

export default About;