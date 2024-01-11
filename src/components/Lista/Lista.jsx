import Tarea from "../Tarea/Tarea";
import Error from "../Error/Error";
import styles from "./Lista.module.css";

function Lista({ listaTarea, handleDelete }) {
    return (
        <ul
            className={`bg-light border rounded px-0 ${styles.shadow} ${styles.max}`}
        >
            {!listaTarea.length ? (
                <Error />
            ) : (
                listaTarea.map((tarea, index) => {
                    return (
                        <Tarea
                            tarea={tarea}
                            key={index}
                            handleDelete={handleDelete}
                        />
                    );
                })
            )}
        </ul>
    );
}

export default Lista;
