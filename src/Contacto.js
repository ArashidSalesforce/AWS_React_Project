import React, { useState } from "react";
import emailjs from "emailjs-com";
import { NavLink } from "react-router-dom";
import { signOut } from "@aws-amplify/auth";
import logo from "./KAIROS.png";
import everythingImage from "./Everything.png";

function Contacto({ onLogout }) {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    mensaje: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic Validation
    if (!formData.nombre || !formData.apellido || !formData.correo || !formData.mensaje) {
      setErrorMessage("Por favor, completa todos los campos.");
      return;
    }

    if (!isValidEmail(formData.correo)) {
      setErrorMessage("Por favor, ingresa un correo válido.");
      return;
    }

    try {
      await emailjs.send(
        "service_trf8bcw", // Replace with your EmailJS Service ID
        "template_i286wnc", // Replace with your EmailJS Template ID
        {
          nombre: formData.nombre,
          apellido: formData.apellido,
          correo: formData.correo,
          mensaje: formData.mensaje,
        },
        "4gRI0FcG_VfJUmgF5" // Replace with your EmailJS User ID
      );

      setSuccessMessage("¡Tu mensaje ha sido enviado con éxito!");
      setErrorMessage(""); // Clear error message on success
      setFormData({ nombre: "", apellido: "", correo: "", mensaje: "" });
    } catch (error) {
      setErrorMessage("Hubo un problema al enviar tu mensaje. Inténtalo de nuevo.");
    }
  };

  const handleLogout = async () => {
    try {
      await signOut();
      onLogout();
    } catch (error) {
      console.error("Error signing out:", error);
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
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Section */}
          <div>
            <h2 className="text-5xl font-bold text-[#2f49a6]">Contáctanos</h2>
            <p className="text-lg text-gray-700 mt-4">Nos encanta escuchar a nuestros clientes.</p>
            <img
              src={everythingImage}
              alt="Kairos Features"
              className="rounded-lg shadow-lg mt-6 w-full h-auto object-contain"
            />
          </div>

          {/* Right Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            {successMessage && (
              <p className="text-green-500 text-center mb-4">{successMessage}</p>
            )}
            {errorMessage && (
              <p className="text-red-500 text-center mb-4">{errorMessage}</p>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Nombre"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2f49a6]"
                  required
                />
                <input
                  type="text"
                  name="apellido"
                  value={formData.apellido}
                  onChange={handleChange}
                  placeholder="Apellido"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2f49a6]"
                  required
                />
              </div>
              <input
                type="email"
                name="correo"
                value={formData.correo}
                onChange={handleChange}
                placeholder="Correo Electrónico"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2f49a6]"
                required
              />
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                placeholder="Mensaje"
                rows="4"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2f49a6]"
                required
              ></textarea>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  required
                  className="w-5 h-5 text-[#2f49a6] border-gray-300 rounded"
                />
                <span className="text-gray-700 text-sm">
                  Aceptas nuestra Política de Privacidad
                </span>
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-[#e5b364] to-[#dba75e] text-white px-6 py-3 rounded-lg w-full hover:shadow-lg transform hover:scale-105 transition duration-300"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
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

export default Contacto;
