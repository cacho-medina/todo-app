import { useState } from "react";
import Lista from "../Lista/Lista";
function Formulario() {
    const [tarea, setTarea] = useState("");
    const [listaTarea, setListaTarea] = useState([]);
    function handleChange(e) {
        setTarea({ ...tarea, [e.target.name]: e.target.value });
    }
    function handleSubmit(e) {
        e.preventDefault();
        setListaTarea([...listaTarea, tarea]);
    }

    return (
        <>
            <form
                action=""
                onSubmit={handleSubmit}
                className="bg-light border border-0 rounded d-flex"
            >
                <input
                    className="form-control"
                    type="text"
                    name="tarea"
                    placeholder="ingrese la tarea..."
                    onChange={handleChange}
                />
                <button className="btn btn-outline-secondary" type="submit">
                    agregar
                </button>
            </form>
            <Lista listaTarea={listaTarea}></Lista>
        </>
    );
}

export default Formulario;
