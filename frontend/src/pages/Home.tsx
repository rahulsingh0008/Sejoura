import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

type HomeProps = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

function Home({ darkMode,
  toggleDarkMode }: HomeProps) {
  const features = [
    {
      title: "AI Guest Assistant",
      description: "Instantly answer guest questions using AI."
    },
    {
      title: "Knowledge Base",
      description: "Manage FAQs, attractions and guest guidelines."
    },
    {
      title: "Conversation History",
      description: "Track and review guest interactions."
    }
  ];

  return (
    <>
      <Navbar darkMode={darkMode}
  toggleDarkMode={toggleDarkMode} />
      <Hero darkMode={darkMode} />

      <div className={`max-w-4xl mx-auto p-8 space-y-8 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-white text-black"
      }`}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              title={feature.title}
              description={feature.description}
              darkMode={darkMode}
            />
          ))}
        </div>
      </div>

      <Footer darkMode={darkMode} />
    </>
  );
}

export default Home;