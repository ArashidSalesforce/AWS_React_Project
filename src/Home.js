import React from 'react';
import { NavLink } from 'react-router-dom';
import { signOut } from '@aws-amplify/auth';
import logo from './KAIROS.png';
import everythingImage from './Everything.png';

function Home({ onLogout }) {
  const handleLogout = async () => {
    try {
      await signOut();
      onLogout();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#fae3d9] via-white to-gray-100 font-[Fredoka]">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 flex justify-between items-center h-28">
          <img src={logo} alt="Kairos Logo" className="h-32" />
          <button
            className="bg-gradient-to-r from-[#e5b364] to-[#dba75e] text-white px-6 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition duration-300 font-bold"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </header>

      {/* Navigation Bar */}
      <nav className="bg-gradient-to-r from-[#e5b364] to-[#dba75e] text-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 flex justify-center md:justify-start space-x-6 py-3">
          <NavLink
            to="/"
            className="text-lg font-bold hover:text-gray-100 transition duration-200"
            activeClassName="underline"
            end
          >
            Inicio
          </NavLink>
          <NavLink
            to="/tareas"
            className="text-lg font-bold hover:text-gray-100 transition duration-200"
            activeClassName="underline"
          >
            Tareas
          </NavLink>
          <NavLink
            to="/notas"
            className="text-lg font-bold hover:text-gray-100 transition duration-200"
            activeClassName="underline"
          >
            Notas
          </NavLink>
          <NavLink
            to="/contacto"
            className="text-lg font-bold hover:text-gray-100 transition duration-200"
            activeClassName="underline"
          >
            Contacto
          </NavLink>
          <NavLink
            to="/user-management"
            className="text-lg font-bold hover:text-gray-100 transition duration-200"
            activeClassName="underline"
          >
            User Management
          </NavLink>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="text-center px-4 mt-8">
          <h2 className="text-6xl font-extrabold text-[#2f49a6] tracking-tight">
            ¡Bienvenido a <span className="text-[#e5b364]">Kairos!</span>
          </h2>
          <p className="text-gray-700 mt-6 text-xl md:text-2xl">
            Una plataforma de <span className="text-[#df473d] font-semibold">aprendizaje integrada</span> hecha para estudiantes.
          </p>
        </div>

        {/* Features Section */}
        <section className="max-w-7xl mx-auto mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-6">
          <div className="space-y-8">
            <h3 className="text-4xl font-bold text-[#2f49a6] leading-snug">
              Transformando la Educación en Colombia y América Latina
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              KAIROS es más que una plataforma educativa; es un ecosistema integral diseñado para abordar algunos de
              los desafíos más urgentes en el sistema educativo actual.
            </p>
            <ul className="list-disc pl-6 text-gray-700 text-lg space-y-3">
              <li>
                <span className="text-[#e5b364] font-semibold">Diseño integral:</span> ecosistema multifacético
              </li>
              <li>
                <span className="text-[#df473d] font-semibold">Acceso inclusivo:</span> equidad garantizada
              </li>
              <li>
                <span className="text-[#2f49a6] font-semibold">Herramientas innovadoras:</span> tecnología avanzada
              </li>
              <li>
                <span className="text-[#df473d] font-semibold">Impacto escalable:</span> adaptable y accesible
              </li>
            </ul>
          </div>

          <div>
            <img
              src={everythingImage}
              alt="Kairos Platform Features"
              className="rounded-lg shadow-2xl transform hover:scale-105 transition duration-300"
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-8 mt-16">
        <div className="text-center">
          <p className="text-sm md:text-lg">Copyright © 2024 | Todos los derechos reservados</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
