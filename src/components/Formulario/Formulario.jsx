import { useState } from "react";
import Lista from "../Lista/Lista";
function Formulario() {
    const [tarea, setTarea] = useState("");
    const [listaTarea, setListaTarea] = useState([]);
    function handleChange(e) {
        setTarea(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        setListaTarea([...listaTarea, tarea]);
        setTarea("");
    }
    console.log(tarea);
    return (
        <>
            <form
                action=""
                onSubmit={handleSubmit}
                className="border border-0 rounded d-flex gap-1"
            >
                <input
                    className="form-control"
                    type="text"
                    name="tarea"
                    placeholder="ingrese la tarea..."
                    onChange={handleChange}
                    value={tarea}
                />
                <button className="btn btn-outline-light" type="submit">
                    agregar
                </button>
            </form>
            <Lista listaTarea={listaTarea}></Lista>
        </>
    );
}

export default Formulario;
