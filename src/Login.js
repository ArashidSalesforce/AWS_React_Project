import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signIn, getCurrentUser, signOut } from '@aws-amplify/auth';
import kairosLogo from './KAIROS.png';
import everythingImage from './Everything.png';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      try {
        const currentUser = await getCurrentUser();
        if (currentUser) {
          navigate('/'); // Redirect if already signed in
        }
      } catch {
        // No user signed in
      }
    };
    checkUser();
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signOut(); // Ensure no existing session
      await signIn({ username: email, password });
      onLogin();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#fae3d9] via-white to-gray-100 font-[Fredoka]">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center h-24">
          <img src={kairosLogo} alt="Kairos Logo" className="h-24" />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <img src={everythingImage} alt="Login Header" className="h-48 mx-auto mb-6" />
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2f49a6]"
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2f49a6]"
              required
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-[#e5b364] to-[#dba75e] text-white px-6 py-3 rounded-lg w-full hover:shadow-lg transform hover:scale-105 transition duration-300"
            >
              Login
            </button>
          </form>
          <Link
            to="/forgot-password"
            className="block text-center mt-4 text-[#2f49a6] hover:underline font-bold"
          >
            Forgot Password?
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-auto">
        <div className="text-center">
          <p className="text-lg">Copyright © 2024 | Todos los derechos reservados</p>
        </div>
      </footer>
    </div>
  );
}

export default Login;
