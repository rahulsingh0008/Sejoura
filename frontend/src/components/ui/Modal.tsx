/**
 * Props:
 * isOpen - show/hide modal
 * title - modal heading
 * onClose - close handler
 */

type ModalProps = {
  isOpen: boolean;
  title: string;
  onClose: () => void;
};

function Modal({ isOpen, title, onClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-bold mb-4">{title}</h2>

        <p>This is a reusable modal component.</p>

        <button
          onClick={onClose}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;