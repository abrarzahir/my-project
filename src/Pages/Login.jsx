import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate(); // Initialize useNavigate
  const [alert, setAlert] = useState({ message: '', type: '' });

  const onSubmit = (data) => {
    console.log('Username:', data.username);
    console.log('Password:', data.password);

    // Check for successful login
    if (data.username === 'abrar' && data.password === '123') {
      setAlert({ message: 'Login successful!', type: 'success' });
      navigate('/home'); // Redirect to Home page
    } else {
      setAlert({ message: 'Invalid credentials!', type: 'error' });
    }

    // Clear alert after 5 seconds
    setTimeout(() => {
      setAlert({ message: '', type: '' });
    }, 5000);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-center text-4xl font-semibold text-gray-800 mb-6">Welcome Back</h2>
        <p className="text-center text-gray-600 mb-8">Please sign in to your account</p>
        
        {/* Alert Message */}
        {alert.message && (
          <div className={`mt-4 p-4 rounded ${alert.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
            {alert.message}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              {...register('username', {
                required: 'Username is required',
                minLength: {
                  value: 4,
                  message: 'Username must be at least 4 characters long',
                },
              })}
              className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-200"
              placeholder="Enter your username"
            />
            {errors.username && (
              <span className="text-red-600 text-sm">{errors.username.message}</span>
            )}
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              {...register('password', { required: 'Password is required' })}
              className="w-full p-4 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition duration-200"
              placeholder="Enter your password"
            />
            {errors.password && (
              <span className="text-red-600 text-sm">{errors.password.message}</span>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-md"
          >
            Sign In
          </button>
        </form>
        <p className="text-center text-gray-600 mt-6">
          Don't have an account? <a href="#" className="text-blue-500 hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
