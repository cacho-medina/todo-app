import Tarea from "../Tarea/Tarea";
import TareaEdit from "../Edit/TareaEdit";
import Error from "../Error/Error";
import styles from "./Lista.module.css";

function Lista({
    listaTareas,
    borrarTarea,
    edit,
    setEdit,
    editTarea,
    obtenertareas,
}) {
    return (
        <ul
            className={`bg-light border rounded py-1 px-0 ${styles.shadow} ${styles.max}`}
        >
            {!listaTareas.length ? (
                <Error />
            ) : (
                listaTareas.map((tarea) => {
                    return edit ? (
                        <TareaEdit
                            tarea={tarea}
                            key={tarea._id}
                            borrarTarea={borrarTarea}
                            editTarea={editTarea}
                            edit={edit}
                            setEdit={setEdit}
                            obtenertareas={obtenertareas}
                        />
                    ) : (
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
