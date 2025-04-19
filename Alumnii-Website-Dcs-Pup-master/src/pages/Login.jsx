import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Reusable input component
const FormInput = ({ label, type, value, onChange, placeholder }) => (
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-medium mb-2">{label}</label>
    <input
      type={type}
      value={value}
      onChange={onChange}
      required
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
      placeholder={placeholder}
    />
  </div>
);

// Reusable button component
const Button = ({ type, onClick, children, isPrimary = true }) => (
  <button
    type={type}
    onClick={onClick}
    className={`w-full py-2.5 px-4 rounded-lg font-medium transition-all duration-200 ${
      isPrimary 
        ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg" 
        : "bg-gray-200 hover:bg-gray-300 text-gray-800"
    }`}
  >
    {children}
  </button>
);

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      localStorage.setItem('token', res.data.token);
      navigate('/Admindashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please check your credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          {/* Header */}
          <div className="bg-blue-600 p-6">
            <h2 className="text-2xl font-bold text-center text-white">Admin Portal</h2>
            <p className="text-blue-100 text-center mt-1">Sign in to your account</p>
          </div>
          
          {/* Form */}
          <form onSubmit={handleLogin} className="p-6 space-y-6">
            {error && (
              <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm">
                {error}
              </div>
            )}
            
            <FormInput
              label="Email Address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@example.com"
            />
            
            <FormInput
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
            
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 text-gray-700">
                  Remember me
                </label>
              </div>
              
              <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
                Forgot password?
              </a>
            </div>
            
            <Button type="submit" isPrimary={true}>
              {isLoading ? 'Signing in...' : 'Sign In'}
            </Button>
            
            <div className="text-center text-gray-500 text-sm mt-4">
              Need help? Contact <a href="#" className="text-blue-600 hover:underline">IT Support</a>
            </div>
          </form>
        </div>
        
        <div className="text-center mt-6 text-gray-600 text-sm">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </div>
      </div>
    </div>
  );
}