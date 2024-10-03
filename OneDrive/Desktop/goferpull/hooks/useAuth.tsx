"use client";

import { useEffect, useState, useContext, createContext, ReactNode } from "react";
import { getCurrentUser, signUpUser, signInUser, signOutUser } from "../lib/utils/authUtils"; // Supabase functions

interface AuthContextType {
  user: any | null; // Change 'any' to the specific type for Supabase user if needed

  login: (email: string, password: string) => Promise<any>;

  register: (email: string, password: string) => Promise<any>;

  logout: () => Promise<void>;

  signInWithGoogle?: () => Promise<any>; // check it for google 
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const auth = useProvideAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

function useProvideAuth() {
  const [user, setUser] = useState<any | null>(null);

  useEffect(() => {
    const checkUser = async () => {
      const currentUser = await getCurrentUser();
      setUser(currentUser);
    };

    checkUser();
  }, []);

  const login = async (email: string, password: string) => {
    const response = await signInUser(email, password);
    setUser(response.user);

    return response.user;
  };

  const register = async (email: string, password: string) => {
    const response = await signUpUser(email, password);
    setUser(response.user);

    return response.user;
  };

  const logout = async () => {
    await signOutUser();
    setUser(null);
  };

  return {
    user,
    login,
    register,
    logout,
  };
}