import styles from "./Tarea.module.css";
import check from "../../assets/images/icon-check.svg";

function Tarea({ tarea, handleDelete }) {
    return (
        <li
            className={`border border-1 d-flex justify-content-between align-items-center px-3 `}
        >
            <p className="my-0 py-2">{tarea}</p>
            <button
                className="btn rounded-circle"
                onClick={() => {
                    handleDelete(tarea);
                }}
            >
                <img src={check} alt="" className="img-fluid" />
            </button>
        </li>
    );
}

export default Tarea;
