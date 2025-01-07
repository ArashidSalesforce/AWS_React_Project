import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import the hook
import { resetPassword, confirmResetPassword } from '@aws-amplify/auth';
import kairosLogo from './KAIROS.png';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [step, setStep] = useState(1); // 1: Request reset, 2: Confirm new password
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate(); // Initialize the hook

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      const output = await resetPassword({ username: email });
      const { nextStep } = output;
      if (nextStep.resetPasswordStep === 'CONFIRM_RESET_PASSWORD_WITH_CODE') {
        setMessage('A confirmation code has been sent to your email.');
        setStep(2);
      } else if (nextStep.resetPasswordStep === 'DONE') {
        setMessage('Password reset completed successfully.');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const handleConfirmResetPassword = async (e) => {
    e.preventDefault();
    try {
      await confirmResetPassword({
        username: email,
        confirmationCode: code,
        newPassword: newPassword,
      });
      setMessage('Your password has been reset successfully. You can now log in with your new password.');
      setTimeout(() => navigate('/login'), 3000); // Redirect to login after 3 seconds
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#fae3d9] via-white to-gray-100 font-[Fredoka]">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center h-24">
          <img src={kairosLogo} alt="Kairos Logo" className="h-20" />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-extrabold text-[#2f49a6] text-center mb-6">Forgot Password</h2>
          {message && <p className="text-green-500 text-center mb-4">{message}</p>}
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          {step === 1 ? (
            <form onSubmit={handleResetPassword} className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2f49a6]"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-[#e5b364] to-[#dba75e] text-white px-6 py-3 rounded-lg w-full hover:shadow-lg transform hover:scale-105 transition duration-300"
              >
                Send Reset Code
              </button>
            </form>
          ) : (
            <form onSubmit={handleConfirmResetPassword} className="space-y-4">
              <input
                type="text"
                placeholder="Enter the confirmation code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2f49a6]"
                required
              />
              <input
                type="password"
                placeholder="Enter your new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2f49a6]"
                required
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-[#e5b364] to-[#dba75e] text-white px-6 py-3 rounded-lg w-full hover:shadow-lg transform hover:scale-105 transition duration-300"
              >
                Reset Password
              </button>
            </form>
          )}
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

export default ForgotPassword;
