'use client';

import { useEffect, useState } from 'react';
import { MessageCard } from './MessageCard';
import { MessageDetail } from './MessageDetail';
import { MessageFilter } from './MessageFilter';

export default function MessagePage() {
  const [messages, setMessages] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    // fetch from your database
    fetch('/api/messages')
      .then((res) => res.json())
      .then((data) => {
        setMessages(data);
        setFiltered(data);
      });
  }, []);

  const handleFilterChange = (query: string) => {
    setFiltered(
      messages.filter((msg) =>
        msg.name.toLowerCase().includes(query.toLowerCase()) ||
        msg.subject.toLowerCase().includes(query.toLowerCase())
      )
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="md:col-span-1 space-y-4">
        <MessageFilter onFilterChange={handleFilterChange} />
        {filtered.map((msg) => (
          <MessageCard
            key={msg._id}
            message={msg}
            onClick={() => setSelected(msg)}
          />
        ))}
      </div>

      <div className="md:col-span-2">
        {selected ? (
          <MessageDetail message={selected} onClose={() => setSelected(null)} />
        ) : (
          <p className="text-gray-500 text-center mt-12">Select a message to view details</p>
        )}
      </div>
    </div>
  );
}
