"use client";
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';

export default function Logout() {
  const router = useRouter();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) console.error('Error logging out:', error.message);
    else router.push('/login'); // Redirect to login page after logout
  };

  return (
    <button onClick={handleLogout} className="bg-red-600 text-white px-4 py-2 rounded">
      Logout
    </button>
  );
}