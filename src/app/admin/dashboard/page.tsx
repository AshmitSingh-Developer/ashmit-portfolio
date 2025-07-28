import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function AdminDashboardPage() {
  const cookieStore = await cookies(); // ✅ This is synchronous
  const authCookie = cookieStore.get('admin-auth'); // ✅ Optional chaining if needed for TS

  if (!authCookie || authCookie.value !== 'true') {
    redirect('/admin/login');
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Welcome, Admin 👋</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-md border">
          <h2 className="text-xl font-semibold mb-2">Total Projects</h2>
          <p className="text-3xl font-bold text-blue-600">6</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md border">
          <h2 className="text-xl font-semibold mb-2">Messages Received</h2>
          <p className="text-3xl font-bold text-green-600">14</p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md border">
          <h2 className="text-xl font-semibold mb-2">New Messages</h2>
          <p className="text-3xl font-bold text-red-600">2</p>
        </div>
       
      </div>
    </div>
  );
}
