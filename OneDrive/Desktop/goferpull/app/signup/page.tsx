"use client"; 
import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth'; 
import { useRouter } from 'next/navigation'; 
import { Main } from '../../components/Main';

export default function Signup() {
  const { register } = useAuth(); // Supabase email signup function
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); 
  const [success, setSuccess] = useState(''); 
  const router = useRouter(); 

  const handleSubmit = async () => {
    try {
      await register(email, password);
      setSuccess('Signup successful! Please check your email for confirmation.');
      setError(''); 

      // Redirect to Main page change according to Need
      router.push('/main'); // Make sure the route matches your Main page setup

    } catch (err: any) {
      setError(err.message); 
      setSuccess(''); 
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6">Sign Up</h2>

        {error && <div className="text-red-500 mb-4">{error}</div>} {/* Display error message */}
        {success && <div className="text-green-500 mb-4">{success}</div>} {/* Display success message */}

        <input
          type="email"
          placeholder="Enter your email"
          className="block w-full p-2 mb-4 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter your password"
          className="block w-full p-2 mb-4 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded w-full">
          Sign up
        </button>

        <div className="flex items-center justify-center mt-4">
          <hr className="w-1/2 border-gray-300" />
          <span className="px-2 text-gray-500">OR</span>
          <hr className="w-1/2 border-gray-300" />
        </div>

        <p className="mt-4 text-center">
          Already have an account? <a href="/login" className="text-blue-600">Sign in</a>
        </p>
      </div>
    </div>
  );
}
