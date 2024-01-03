import styles from "./Tarea.module.css";
function Tarea({ tarea }) {
    function handleActive(e) {
        const etiqueta = e.target;
        etiqueta.classList.toggle(`${styles.done}`);
    }
    return (
        <li
            className="border border-1 d-flex justify-content-center align-items-center"
            onClick={handleActive}
        >
            <p className="my-0 py-2">{tarea ? tarea.tarea : "No hay tareas"}</p>
        </li>
    );
}

export default Tarea;
