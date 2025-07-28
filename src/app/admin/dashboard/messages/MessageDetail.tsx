interface MessageDetailProps {
  message: {
    _id: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    date: string;
  };
  onClose: () => void;
}

export const MessageDetail = ({ message, onClose }: MessageDetailProps) => (
  <div className="p-6 border rounded-xl shadow-md bg-white">
    <div className="flex justify-between mb-4">
      <h2 className="text-xl font-bold">{message.subject}</h2>
      <button onClick={onClose} className="text-red-500 font-medium">
        Close
      </button>
    </div>
    <p className="text-sm text-gray-500 mb-2">{message.date}</p>
    <p className="text-gray-800">
      <strong>From:</strong> {message.name} ({message.email})
    </p>
    <hr className="my-4" />
    <p>{message.message}</p>
  </div>
);
