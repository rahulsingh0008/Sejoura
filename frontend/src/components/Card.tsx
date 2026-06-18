type CardProps = {
  title: string;
  description: string;
  darkMode: boolean;
};

function Card({ title, description, darkMode }: CardProps) {
  return (
    <div
      className={
        darkMode
          ? "border border-gray-700 rounded-xl shadow-md p-8 bg-gray-800 text-white hover:shadow-lg transition"
          : "border rounded-xl shadow-md p-8 bg-white text-black hover:shadow-lg transition"
      }
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Card;