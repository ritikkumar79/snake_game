// components/Dashboard.tsx

import { useAuth } from '../hooks/useAuth';

export const Dashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-3xl">Welcome, {user ? user.email : 'Guest'}</h1>
      <div className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>
        <div className="flex justify-around">
          <div className="max-w-xs p-4 bg-white rounded shadow-md">
            <h3 className="text-xl font-bold mb-2">Service One</h3>
            <p>Detail about service one.</p>
          </div>
          <div className="max-w-xs p-4 bg-white rounded shadow-md">
            <h3 className="text-xl font-bold mb-2">Service Two</h3>
            <p>Detail about service two.</p>
          </div>
          <div className="max-w-xs p-4 bg-white rounded shadow-md">
            <h3 className="text-xl font-bold mb-2">Service Three</h3>
            <p>Detail about service three.</p>
          </div>
        </div>
      </div>
    </div>
  );
};