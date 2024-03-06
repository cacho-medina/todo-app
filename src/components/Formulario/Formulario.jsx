import { useEffect, useState } from "react";
import Lista from "../Lista/Lista";
import { motion } from "framer-motion";

function Formulario() {
    const todoList = JSON.parse(localStorage.getItem("todos")) || [];
    const [tarea, setTarea] = useState("");
    const [listaTarea, setListaTarea] = useState(todoList);
    function handleChange(e) {
        setTarea(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        setListaTarea([...listaTarea, tarea]);
        setTarea("");
    }
    function handleDelete(descripcion) {
        const newLista = listaTarea.filter((task) => task !== descripcion);
        setListaTarea(newLista);
    }
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(listaTarea));
    }, [listaTarea]);
    return (
        <>
            <form
                action=""
                onSubmit={handleSubmit}
                className="border border-0 rounded d-flex gap-1"
            >
                <motion.input
                    whileTap={{ scale: 0.9 }}
                    className="form-control"
                    type="text"
                    name="tarea"
                    placeholder="ingrese la tarea..."
                    onChange={handleChange}
                    value={tarea}
                />
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="btn btn-outline-light"
                    type="submit"
                    disabled={!tarea}
                >
                    agregar
                </motion.button>
            </form>
            <Lista listaTarea={listaTarea} handleDelete={handleDelete}></Lista>
        </>
    );
}

export default Formulario;
