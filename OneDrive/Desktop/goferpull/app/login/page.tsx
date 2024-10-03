"use client";
import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth'; // This should already use Supabase authentication
import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation

export default function Login() {
  const { login } = useAuth(); // Supabase email login function
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // For error handling
  const router = useRouter(); // Initialize useRouter

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      router.push('../Profile'); // Redirect to main page after successful login
    } catch (error: any) {
      setError(error.message); 
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-8 border-blue-700 rounded-xl shadow-md " style={{width: '40rem', borderTopWidth: '0.75rem'}}>
        <h2 className="text-2xl font-bold mb-6">Sign In</h2>
        
        {error && <div className="text-red-500 mb-4">{error}</div>} {/* Show error message */}

        <input
          type="email"
          placeholder="Enter your email"
          className="block w-full p-2 mb-4 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          className="block w-full p-2 mb-4 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        
        <div className="flex items-center justify-between mb-4">
          <a href="/forgotpassword" className="text-blue-700">Forgot password</a>
        </div>
        
        <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded w-full">Sign in</button>

        <p className="mt-8 text-center">
          New to Safety Shaper? <a href="/signup" className="text-blue-600">Join now</a>
        </p>
      </form>
    </div>
  );
}
