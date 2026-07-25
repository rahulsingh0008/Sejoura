/**
 * Improved loader with subtle gradient and size prop
 */

type LoaderProps = {
  size?: number;
};

function Loader({ size = 40 }: LoaderProps) {
  return (
    <div style={{ width: size, height: size }} className="flex items-center justify-center">
      <svg className="animate-spin" width={size} height={size} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" stroke="rgba(99,102,241,0.12)" strokeWidth="4" fill="none" />
        <path d="M22 12a10 10 0 00-10-10" stroke="url(#g)" strokeWidth="4" strokeLinecap="round" fill="none">
        </path>
        <defs>
          <linearGradient id="g" x1="0" x2="1">
            <stop offset="0%" stopColor="#7c3aed" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default Loader;