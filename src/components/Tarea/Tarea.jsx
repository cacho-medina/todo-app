import { TbHttpDelete } from "react-icons/tb";
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
            <div className="d-flex align-items-center gap-2">
                <button
                    className="btn btn-outline-danger border-0"
                    onClick={() => {
                        borrarTarea(tarea._id);
                    }}
                >
                    <TbHttpDelete />
                </button>
            </div>
        </motion.li>
    );
}

export default Tarea;
