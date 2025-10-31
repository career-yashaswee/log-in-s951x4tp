import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { LoginForm } from '@/components/login-form';

function Login() {
  // TODO: Add state management for username, password, and loading
  // Hint: Use useState hook for each

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: Set loading state to true

    try {
      // TODO: Make a POST request to '/api/auth/login'
      // Hint: Use fetch() with method: 'POST', headers, and body
      // The body should be JSON with username and password
      // TODO: Parse the response as JSON
      // TODO: Check if response.ok
      // If not ok: show error toast and set loading to false, then return
      // Hint: toast.error() for errors
      // TODO: Store user data in localStorage
      // Hint: localStorage.setItem('user', JSON.stringify(data.user))
      // TODO: Navigate to dashboard
      // Hint: navigate('/dashboard')
    } catch {
      // TODO: Handle network errors
      // Hint: Show error toast and set loading to false
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md">
        <LoginForm
          username={''}
          password={''}
          loading={false}
          onUsernameChange={() => {}}
          onPasswordChange={() => {}}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
}

export default Login;
