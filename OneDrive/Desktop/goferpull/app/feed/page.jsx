"use client"
import { useAuth } from '@/hooks/useAuth';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Sidebar } from '@/components/Sidebar';
import { Main } from '@/components/Main';
import { Aside } from '@/components/Aside';
import { ProtectedRoute } from '@/components/ProtectedRoute';

export default function DashboardPage() {
  const { user } = useAuth();
  const router = useRouter();
  return (<>
      <ProtectedRoute>

    <div className="pt-4 grid gap-6" id="index-grid">
          <Sidebar />
          <Main />
          <Aside />
        </div>
        </ProtectedRoute>

  </>);
}