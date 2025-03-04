// components/Contact.js
import { FaPhoneAlt, FaEnvelope, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="container py-5 text-center">
      <h1 className="text-uppercase mb-4">
        📡 Contacto: Llamado a los Héroes 🦸‍♂️
      </h1>
      <p className="mb-4">
        Si necesitas un <strong>aliado para tu próxima misión</strong> o un
        <strong> compañero de equipo</strong> para enfrentar nuevos desafíos
        tecnológicos, aquí estoy listo para ayudarte. 💻✨ No dudes en
        contactarme en <strong>jhonrangel21@gmail.com</strong>, estaré encantado
        de hablar contigo.
      </p>

      {/* Imagen */}
      <div className="mb-4">
        <img alt="Banner Avengers" className="img-fluid rounded shadow w-50" />
      </div>

      {/* Información de Contacto */}
      <div className="row row-cols-1 row-cols-md-3 g-4 justify-content-center">
        {/* Teléfono */}
        <div className="col d-flex flex-column align-items-center">
          <FaPhoneAlt size={24} className="text-primary mb-2" />
          <span className="fw-bold">+57 322 457 0871</span>
        </div>

        {/* Correo */}
        <div className="col d-flex flex-column align-items-center">
          <FaEnvelope size={27} className="text-primary mb-2" />
          <span className="fw-bold">jhonrangel21@gmail.com</span>
        </div>

        {/* LinkedIn */}
        <div className="col d-flex flex-column align-items-center">
          <FaLinkedin size={24} className="text-primary mb-2" />
          <a
            href="https://www.linkedin.com/in/jhon-rangel-/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none fw-bold text-white"
            aria-label="Visitar perfil de LinkedIn de Jhon Rangel"
          >
            Mi LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
