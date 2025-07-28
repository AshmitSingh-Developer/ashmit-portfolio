// app/admin/page.tsx
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function AdminPage() {
  const cookieStore = await cookies(); // ✅ Correct usage
  const authCookie = cookieStore.get('admin-auth');

  if (authCookie?.value === 'true') {
    return redirect('/admin/dashboard'); // ✅ return
  } else {
    return redirect('/admin/login'); // ✅ return
  }
}
