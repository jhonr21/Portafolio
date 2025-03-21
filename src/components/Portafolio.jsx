import React from "react";

const Portfolio = () => {
  const projects = [
    {
      name: "Formulario Controlado Tareas",
      description: "CRUD con React, JavaScript y Bootstrap.",
      link: "https://formulario-controlado1.netlify.app/",
    },
    {
      name: "Formulario con Tailwind",
      description:
        "Gestor de tareas interactivo construido con React y Tailwind CSS.",
      link: "https://vite-tailwind-form-mobie.netlify.app/",
      git: "https://github.com/jhonr21/Vite-Tailwind-Form-mobie",
    },
    {
      name: "Pagina Freelancer",
      description: "Maqueteo HTML, CSS, JavaScript.",
      link: "https://solo-html.netlify.app/",
      git: "https://github.com/jhonr21/Freelancer",
    },
    {
      name: "Pagina Cafetería",
      description: "Maqueteo HTML, CSS, JavaScript y PHP.",
      link: "https://maqueteo.netlify.app/",
      git: "https://github.com/jhonr21/cafe/tree/master/blogdecafe_fin",
    },
    {
      name: "Búsqueda de Git",
      description: "Consumo de APIs con React.",
      link: "https://git-busqueda-api.netlify.app/",
      git: "https://github.com/jhonr21/04-git-expert-app",
    },
    {
      name: "Página de Películas",
      description: "Consumo de API, React, JavaScript.",
      link: "https://jhonr21.github.io/SPRINT-1/",
      git: "https://github.com/jhonr21/SPRINT-1",
    },

    {
      name: "React-Router-basic",
      description: "App web en React con React Router, consumo de API externa y estilos con Bootstrap. Tecnologías: React, React Router, Bootstrap, JSONPlaceholder. ",
      link: "https://react-router-prrimerapp.netlify.app/",
      git: "https://github.com/jhonr21/React-Router-basic",
    },

    {
      name: "Portal de Acceso(Login y Dashboard)",
      description: "React.js, Tailwind CSS, React Router DOM, Context API, Vite, JavaScript ES6+",
      link: "https://portal-de-acceso.netlify.app",
      git: "https://github.com/jhonr21/Login-tailwind",
    },
    
  ];

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">
        💥 Mi Portafolio: Aquí mis últimas misiones 💥
      </h1>
      <p className="text-center mb-5">
        🔥 Misiones Completadas y en Curso 💼🦸‍♂️ En cada batalla tecnológica, un
        verdadero héroe del código debe enfrentarse a desafíos épicos. Aquí
        encontrarás mis misiones completadas y en curso, donde cada una
        representa una nueva oportunidad para demostrar habilidades, creatividad
        y estrategia. 🛠 Algunas misiones fueron como construir el traje de Iron
        Man: llenas de innovación y precisión. 🕸 Otras exigieron la agilidad y
        adaptabilidad de Spider-Man para resolver problemas en el menor tiempo
        posible. ⚡ Y algunas requirieron la fuerza de Thor, listas para
        resistir cualquier reto que se presentara. Si buscas un aliado para tu
        próxima misión tecnológica, ¡contáctame y armemos el equipo perfecto!
      </p>

      {/* Contenedor de tarjetas */}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        {projects.map((project, index) => (
          <div key={index} className="col">
            {/* Tarjeta personalizada */}
            <div className="card h-100 shadow-lg border-0 rounded-3">
              {/* Imagen con carga optimizada */}
              <div className="card-custom-img">
                <img
                  src="/avengers.png"
                  alt="Jhon Rangel"
                  className="img-fluid rounded foto"
                  loading="lazy"
                />
              </div>

              {/* Cuerpo de la tarjeta */}
              <div className="card-body">
                <h6 className="card-title">{project.name}</h6>
                <p className="card-text text-card">{project.description}</p>
              </div>

              {/* Pie de la tarjeta */}
              <div
                className="card-footer"
                style={{ background: "inherit", borderColor: "inherit" }}
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary w-100"
                >
                  Ver Proyecto
                </a>

                <a
                  href={project.git}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary w-100 mt-2"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
