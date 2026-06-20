function ConfirmModal({
  isOpen,
  title,
  message,
  onConfirm,
  onCancel,
}) {

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-xl p-6 w-full max-w-md">

        <h2 className="text-xl font-semibold">
          {title}
        </h2>

        <p className="text-gray-500 mt-3">
          {message}
        </p>

        <div className="flex justify-end gap-3 mt-6">

          <button
            onClick={onCancel}
            className="border px-4 py-2 rounded-lg"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="bg-red-600 text-white px-4 py-2 rounded-lg"
          >
            Confirm
          </button>

        </div>

      </div>

    </div>
  );
}

export default ConfirmModal;