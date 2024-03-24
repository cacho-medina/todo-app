import { MdOutlineDownloadDone } from "react-icons/md";
import { TbHttpDelete } from "react-icons/tb";
import { motion } from "framer-motion";
import { useState } from "react";
import styles from "./TareaEdit.module.css";

function TareaEdit({
    tarea,
    borrarTarea,
    editTarea,
    edit,
    setEdit,
    obtenertareas,
}) {
    const [nuevaTarea, setNuevaTarea] = useState({
        nombre: "",
    });
    function handleChange(e) {
        setNuevaTarea({ nombre: e.target.value });
    }

    async function editarTarea(tarea, id) {
        const res = await editTarea(tarea, id);
        if (!res.ok) {
            alert("Error al editar la tarea");
        }
        obtenertareas();
    }

    function handleEdit() {
        if (!nuevaTarea.nombre.length) {
            alert("Ingrese la nueva tarea!!");
        } else {
            editarTarea(nuevaTarea, tarea._id);
            setEdit(!edit);
        }
    }

    return (
        <motion.li
            initial={{ translateY: -20, opacity: 0 }}
            animate={{ translateY: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            exit={{ scale: 0 }}
            className={`border border-1 d-flex justify-content-between align-items-center px-3 `}
        >
            <input
                type="text"
                className={`form-control ${styles.edit}`}
                placeholder={tarea.nombre}
                onChange={handleChange}
                value={nuevaTarea.nombre}
            />
            <div className="d-flex align-items-center gap-2">
                <button
                    className="btn btn-outline-secondary border-0"
                    onClick={() => {
                        handleEdit();
                        /* obtenertareas(); */
                    }}
                >
                    <MdOutlineDownloadDone />
                </button>
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

export default TareaEdit;
