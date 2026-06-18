/**
 * Props:
 * message - toast text
 */

type ToastProps = {
  message: string;
};

function Toast({ message }: ToastProps) {
  return (
    <div className="fixed bottom-5 right-5 bg-green-600 text-white px-4 py-3 rounded-lg shadow-lg">
      {message}
    </div>
  );
}

export default Toast;