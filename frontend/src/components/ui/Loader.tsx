/**
 * Props:
 * size - loader size
 */

type LoaderProps = {
  size?: number;
};

function Loader({ size = 40 }: LoaderProps) {
  return (
    <div
      className="border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin"
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
}

export default Loader;