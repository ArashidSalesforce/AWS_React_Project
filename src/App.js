import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import './App.css';
import Home from './Home';
import Login from './Login';
import ForgotPassword from './ForgotPassword';
import Tareas from './Tareas';
import Notas from './Notas';
import Asistencia from './Asistencia';
import Contacto from './Contacto';
import UserManagement from './UserManagement';

Amplify.configure(awsExports);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = async () => {
    try {
      const { signOut } = await import('aws-amplify/auth');
      await signOut();
      setIsLoggedIn(false);
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };

  return (
    <Router>
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/" element={<Home onLogout={handleLogout} />} />
            <Route path="/tareas" element={<Tareas />} />
            <Route path="/notas" element={<Notas />} />
            <Route path="/asistencia" element={<Asistencia />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/user-management" element={<UserManagement />} />
          </>
        ) : (
          <>
            <Route path="/" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
            <Route path="/login" element={<Login onLogin={() => setIsLoggedIn(true)} />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
