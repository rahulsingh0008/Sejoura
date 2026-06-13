type CardProps = {
  title: string;
  description: string;
};

function Card({ title, description }: CardProps) {
  return (
    <div className="border rounded-lg shadow-md p-6 bg-white">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Card;