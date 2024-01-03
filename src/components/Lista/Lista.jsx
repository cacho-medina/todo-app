import Tarea from "../Tarea/Tarea";

import styles from "./Lista.module.css";

function Lista({ listaTarea }) {
    return (
        <ul className={`bg-light border rounded px-0 ${styles.shadow}`}>
            {!listaTarea.length ? (
                <Tarea />
            ) : (
                listaTarea?.map((tarea, index) => {
                    return <Tarea tarea={tarea} key={index} />;
                })
            )}
        </ul>
    );
}

export default Lista;
