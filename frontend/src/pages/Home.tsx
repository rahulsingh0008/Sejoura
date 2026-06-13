import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

function Home() {
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
      <Navbar />
      <Hero />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;