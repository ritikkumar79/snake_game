"use client";
import { useRouter } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import { useEffect } from 'react';
import Loading from '@/components/Loading';

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login'); 
    }
  }, [user, loading, router]);

  if (loading) {
    return <Loading />; 
  }

  if (!user) {
    return null;
  }

  return <>{children}</>;
}