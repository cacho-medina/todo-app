import Tarea from "../Tarea/Tarea";

function Lista({ listaTarea }) {
    return (
        <ul className="bg-light border rounded px-0">
            {listaTarea?.map((tarea, index) => {
                return <Tarea tarea={tarea} key={index} />;
            })}
        </ul>
    );
}

export default Lista;
