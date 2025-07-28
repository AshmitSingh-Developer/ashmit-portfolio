interface MessageFilterProps {
  onFilterChange: (query: string) => void;
}

export const MessageFilter = ({ onFilterChange }: MessageFilterProps) => {
  return (
    <input
      type="text"
      placeholder="Search by name or subject..."
      className="w-full p-2 border rounded-md shadow-sm"
      onChange={(e) => onFilterChange(e.target.value)}
    />
  );
};
