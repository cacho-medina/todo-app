import check from "../../assets/images/icon-check.svg";
import { motion } from "framer-motion";

function Tarea({ tarea, borrarTarea }) {
    return (
        <motion.li
            initial={{ translateY: -20, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ scale: 0 }}
            className={`border border-1 d-flex justify-content-between align-items-center px-3 `}
        >
            <p className="my-0 py-2">{tarea.nombre}</p>
            <button
                className="btn rounded-circle"
                onClick={() => {
                    borrarTarea(tarea._id);
                }}
            >
                <img src={check} alt="" className="img-fluid" />
            </button>
        </motion.li>
    );
}

export default Tarea;
