interface MessageCardProps {
  message: {
    _id: string;
    name: string;
    email: string;
    subject: string;
    date: string;
    read: boolean;
  };
  onClick: () => void;
}

export const MessageCard = ({ message, onClick }: MessageCardProps) => (
  <div
    onClick={onClick}
    className={`cursor-pointer p-4 rounded-xl shadow-sm border hover:shadow-md transition ${
      message.read ? 'bg-white' : 'bg-blue-50'
    }`}
  >
    <div className="flex justify-between">
      <h4 className="font-semibold">{message.name}</h4>
      <span className="text-sm text-gray-500">{message.date}</span>
    </div>
    <p className="text-sm text-gray-600">{message.subject}</p>
  </div>
);
