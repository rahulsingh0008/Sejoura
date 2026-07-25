import Footer from "../components/Footer";

type AboutProps = {
  darkMode: boolean;
};

function About({ darkMode }: AboutProps) {
  return (
    <>
      <main className={`max-w-5xl mx-auto p-8 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-white text-black"
      }`}>
        <h1 className="text-4xl font-bold mb-4">About</h1>

        <p>
          Sejoura helps homestay owners automate guest support using AI.
        </p>
      </main>

      <Footer darkMode={darkMode} />
    </>
  );
}

export default About;