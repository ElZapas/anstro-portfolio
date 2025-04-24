import BentoGrid from "../../components/index/BentoGrid";
import ArrowNav from "../../components/index/ArrowNav";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFilePdf, FaEnvelope, FaPhone } from "react-icons/fa";

const Contacto = () => {
  return (
    <BentoGrid>
      {/* Agradecimiento y mensaje final */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="col-span-3 row-span-5 flex flex-col justify-center p-6 bg-azul-claro text-texto-principal rounded-xl"
      >
        <h2 className="text-4xl font-bold italic">¡Gracias por llegar hasta aquí!</h2>
        <p className="mt-4 text-lg font-light italic">
          Si te interesa colaborar, tienes alguna pregunta, o simplemente quieres saludar,
          puedes contactarme por cualquiera de estos medios.
        </p>
      </motion.div>

      {/* Cápsulas de contacto */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="col-span-2 row-span-3 grid grid-cols-2 gap-4"
      >
        <a
          href="https://www.linkedin.com/in/tuusuario"
          target="_blank"
          className="p-4 bg-azul-medio text-texto-principal rounded-xl flex items-center gap-2 hover:scale-105 transition-transform"
        >
          <FaLinkedin size={24} /> LinkedIn
        </a>
        <a
          href="https://github.com/ElZapas"
          target="_blank"
          className="p-4 bg-azul-medio text-texto-principal rounded-xl flex items-center gap-2 hover:scale-105 transition-transform"
        >
          <FaGithub size={24} /> GitHub
        </a>
        <a
          href="/pdfs/CV_TuNombre.pdf"
          target="_blank"
          className="p-4 bg-azul-medio text-texto-principal rounded-xl flex items-center gap-2 hover:scale-105 transition-transform"
        >
          <FaFilePdf size={24} /> Ver CV
        </a>
        <a
          href="mailto:tuemail@ejemplo.com"
          className="p-4 bg-azul-medio text-texto-principal rounded-xl flex items-center gap-2 hover:scale-105 transition-transform"
        >
          <FaEnvelope size={24} /> Correo
        </a>
      </motion.div>

      {/* Teléfono y otra cápsula opcional */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="col-span-2 row-span-2 flex items-center justify-center bg-gradient-to-br from-acento to-azul-medio rounded-xl text-white text-xl font-medium"
      >
        <FaPhone className="mr-2" /> +51 999 999 999
      </motion.div>
    </BentoGrid>
  );
};

export default Contacto;
