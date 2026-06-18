/**
 * Props:
 * placeholder - input placeholder text
 */

type InputProps = {
  placeholder: string;
};

function Input({ placeholder }: InputProps) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="border border-gray-300 rounded-lg px-3 py-2 w-full"
    />
  );
}

export default Input;