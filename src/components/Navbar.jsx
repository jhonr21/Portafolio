// components/Navbar.js
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"; // Asegura que Bootstrap JS está cargado

const Navbar = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="navbar navbar-expand-md bg-dark bg-opacity-75 shadow-sm fixed-top">
      <div className="container d-flex justify-content-end">
        {/* Marca o logo */}

        {/* Botón para móviles */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon "></span>
        </button>

        {/* Menú desplegable */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav gap-3">
            <li className="nav-item">
              <button
                onClick={() => setActiveTab("home")}
                className={`btn ${activeTab === "home" ? "btn-primary" : "btn-outline-light"} w-100`}
              >
                Home
              </button>
            </li>
            <li className="nav-item">
              <button
                onClick={() => setActiveTab("portfolio")}
                className={`btn ${activeTab === "portfolio" ? "btn-primary" : "btn-outline-light"} w-100`}
              >
                Portfolio
              </button>
            </li>
            <li className="nav-item">
              <button
                onClick={() => setActiveTab("contact")}
                className={`btn ${activeTab === "contact" ? "btn-primary" : "btn-outline-light"} w-100`}
              >
                Contacto
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
