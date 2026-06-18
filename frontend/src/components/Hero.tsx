type HeroProps = {
  darkMode: boolean;
};

function Hero({ darkMode }: HeroProps) {
  return (
    <section className="text-center py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">
          AI-Powered Guest Support Assistant
        </h2>

        <p
          className={
            darkMode
              ? "text-gray-300"
              : "text-gray-600"
          }
        >
          Helping homestay owners automate guest communication.
        </p>
      </div>
    </section>
  );
}

export default Hero;