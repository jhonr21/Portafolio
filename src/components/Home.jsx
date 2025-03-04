import miFoto from "../../public/image.png"; // Asegúrate de que la imagen esté en la ruta correcta
import { FaJs, FaReact, FaNode, FaDatabase } from "react-icons/fa";
import {
  SiExpress,
  SiFirebase,
  SiBootstrap,
  SiTailwindcss,
  SiRedux,
} from "react-icons/si";
import TypewriterText from "./TypewriterText";
import InfinityGemsSkills from "./InfinityGemsSkills";
// Archivo de estilos personalizado

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        {/* Imagen */}
        <div className="col-md-4 text-center">
          <div className="border border-primary rounded-lg p-2 shadow">
            <img
              src={miFoto}
              alt="Jhon Rangel"
              className="img-fluid rounded foto"
            />
          </div>
        </div>

        {/* Texto de Presentación */}
        <div className="col-md-8 text-justify ">
          <TypewriterText />

          {/* Skills */}
          <InfinityGemsSkills />
        </div>
      </div>
    </div>
  );
};

export default Home;
