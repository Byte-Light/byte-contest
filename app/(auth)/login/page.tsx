"use client"; // Make the whole page a client component

import React from 'react';
import Login from '@/components/auth/Login';

const LoginPage: React.FC = () => {
  // Simulate a login function that accepts email and password
  const handleLogin = async (email: string, password: string) => {
    try {
      // Simulate API call (replace with real API call)
      console.log('Logging in with:', { email, password });
      // You can add redirection or state update here on success
    } catch (error) {
      // Handle login error
      console.error('Login failed:', error);
      throw new Error('Login failed');
    }
  };

  return (
    <div>
      <Login onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;
