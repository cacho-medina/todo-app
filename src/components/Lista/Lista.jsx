import Tarea from "../Tarea/Tarea";
import Error from "../Error/Error";
import styles from "./Lista.module.css";
import { motion, AnimatePresence } from "framer-motion";

function Lista({ listaTarea, handleDelete }) {
    return (
        <motion.ul
            layout
            transition={{ staggerChildren: 0.5 }}
            className={`bg-light border rounded px-0 ${styles.shadow} ${styles.max}`}
        >
            <AnimatePresence>
                {!listaTarea.length ? (
                    <Error />
                ) : (
                    listaTarea.map((tarea, index) => {
                        return (
                            <Tarea
                                tarea={tarea}
                                key={index}
                                index={index}
                                handleDelete={handleDelete}
                            />
                        );
                    })
                )}
            </AnimatePresence>
        </motion.ul>
    );
}

export default Lista;
