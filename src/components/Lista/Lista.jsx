import Tarea from "../Tarea/Tarea";
import Error from "../Error/Error";
import styles from "./Lista.module.css";

function Lista({ listaTareas, borrarTarea }) {
    return (
        <ul
            className={`bg-light border rounded px-0 ${styles.shadow} ${styles.max}`}
        >
            {!listaTareas.length ? (
                <Error />
            ) : (
                listaTareas.map((tarea) => {
                    return (
                        <Tarea
                            tarea={tarea}
                            key={tarea._id}
                            borrarTarea={borrarTarea}
                        />
                    );
                })
            )}
        </ul>
    );
}

export default Lista;
