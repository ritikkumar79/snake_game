"use client"
import React from 'react';
import { supabase } from '../../lib/supabaseClient';

export default function Signup() {
    const login = async () => {
            const { error } = await supabase.auth.signInWithOAuth({
              provider: 'github', 
            });
        
            if (error) {
              console.error('Error logging in:', error.message);
              alert('Error logging in: ' + error.message); 
            } else {
              console.log('Login initiated!'); 
             
            }
          };

  return (
    <div className="">
                 <button onClick={login} className='w-full bg-red-600 text-white px-4 py-2 rounded'>Login With GitHub</button>
    </div>
  );
}

