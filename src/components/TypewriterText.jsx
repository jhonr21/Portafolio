import Typewriter from "typewriter-effect";

const TypewriterText = () => {
  return (
    <div className="text-lg text-gray-800 dark:text-white p-4 text-end">
      <h1 className="text-2xl font-bold text-blue-600">
        {" "}
        Mi nombre es: Jhon Rangel
      </h1>
      <Typewriter
        options={{
          strings: [
            "Hola, un placer saludarte. Soy un programador junior apasionado por la tecnología y el desarrollo de software. Como un verdadero Vengador del código, me enfrento a cada reto con creatividad y determinación. Me encanta aprender, mejorar y adaptarme, porque en este mundo tecnológico, siempre hay una nueva batalla por ganar. Busco oportunidades donde pueda aportar valor, colaborar con un gran equipo y seguir evolucionando. Como diría el Capitán América... '¡Podría hacer esto todo el día!' 💻⚡",
          ],
          autoStart: true,
          loop: false, // ❌ No se borra el texto
          delay: 80, // Velocidad de escritura
          cursor: "", // ❌ Oculta el cursor después de escribir
        }}
      />
    </div>
  );
};

export default TypewriterText;
