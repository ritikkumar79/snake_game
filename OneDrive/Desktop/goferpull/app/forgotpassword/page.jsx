"use client";
import React, { useState } from 'react';
import { auth } from '../../firebaseConfig';
import { sendPasswordResetEmail } from 'firebase/auth';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handlePasswordReset = async (event) => {
    event.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage('Check your email for password reset instructions.');
    } catch (error) {
      setMessage('Error resetting password. Please try again.');
    }
  };

  return (
    <div>
      <h2>Forgot Password</h2>
      <form onSubmit={handlePasswordReset}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <button type="submit">Reset Password</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ForgotPassword;
