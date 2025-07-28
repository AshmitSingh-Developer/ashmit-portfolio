'use client';

import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const res = await fetch('/api/admin-logout', {
        method: 'POST',
      });

      if (res.ok) {
        router.push('/admin/login');
      } else {
        console.error('Logout failed');
      }
    } catch (err) {
      console.error('Error logging out:', err);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="w-full flex items-center px-4 py-2 rounded-md bg-red-600 text-white hover:bg-red-700 transition"
    >
      Logout
    </button>
  );
}
