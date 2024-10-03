"use client";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { useAuth } from '../hooks/useAuth';
import Hero from "@/components/home/Hero";
import Sections from "@/components/home/Sections";
import Loading from "@/components/Loading";

export default function Home() {
  const { user, loading } = useAuth(); // Use loading state from useAuth
  const router = useRouter();
  
  useEffect(() => {
    // If loading is false and user is authenticated, redirect to feed
    if (!loading && user) {
      router.push('/feed');
    }
  }, [user, loading, router]);

  if (loading) {
    // If loading is true, return nothing to prevent any render
    return <Loading/>; // You can also return a loading spinner here if desired
  }

  if (!user) {
    // If user is not authenticated, show the home page
    return (
      <div>
        <Hero />
        <Sections />
      </div>
    );
  }

  return null; // Safeguard, although it should redirect before this point
}