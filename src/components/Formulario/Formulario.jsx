import { useEffect, useState } from "react";
import Lista from "../Lista/Lista";
import { motion } from "framer-motion";
import {
    getTareas,
    editTarea,
    deleteTarea,
    crearTarea,
} from "../../helpers/queries";

function Formulario() {
    const [tarea, setTarea] = useState({
        nombre: "",
    });
    const [listaTareas, setListaTareas] = useState([]);
    const [edit, setEdit] = useState(false);

    function handleChange(e) {
        setTarea({ nombre: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!tarea.nombre.length) {
            alert("Ingrese la tarea!!");
        } else {
            crearNuevaTarea(tarea);
            setTarea({
                nombre: "",
            });
        }
    }

    function enableEdit() {
        setEdit(!edit);
    }

    async function crearNuevaTarea(tarea) {
        const res = await crearTarea(tarea);
        if (!res.ok) {
            alert("Error al obtener la tarea");
        }
        obtenertareas();
    }

    async function obtenertareas() {
        const res = await getTareas();
        if (res.ok) {
            const lista = await res.json();
            setListaTareas(lista);
        }
    }

    async function borrarTarea(id) {
        const res = await deleteTarea(id);
        if (!res.ok) {
            alert("Error al borrar la tarea");
        }
        obtenertareas();
    }

    useEffect(() => {
        obtenertareas();
    }, []);

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
                    value={tarea.nombre}
                />
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="btn btn-outline-light"
                    type="submit"
                >
                    agregar
                </motion.button>
            </form>
            <Lista
                listaTareas={listaTareas}
                borrarTarea={borrarTarea}
                edit={edit}
                setEdit={setEdit}
                editTarea={editTarea}
                obtenertareas={obtenertareas}
            ></Lista>
            <div>
                <button
                    className="btn btn-outline-secondary"
                    onClick={() => enableEdit()}
                >
                    {!edit ? "Habilitar edicion" : "Deshabilitar edicion"}
                </button>
            </div>
        </>
    );
}

export default Formulario;
