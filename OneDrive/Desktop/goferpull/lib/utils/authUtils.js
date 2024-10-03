import { supabase } from '../supabaseClient';

// Check if a user is logged in
export const getCurrentUser = async () => {
    const { data: { session }, error } = await supabase.auth.getSession();
    
    if (error) throw error;
    
    return session?.user || null;
};

// Sign up user with email and password
export const signUpUser = async (email, password) => {
    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
    });
    
    if (error) throw error;
    
    return data;
};

// Sign in user with email and password
export const signInUser = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    });
    
    if (error) throw error;
    
    return data;
};

// Log out the current user
export const signOutUser = async () => {
  const { error } = await supabase.auth.signOut();
  
  if (error) throw error;
  
  return true;
};
