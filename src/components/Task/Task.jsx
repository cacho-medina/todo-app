import styles from "./Task.module.css";
import cross from "../../assets/images/icon-cross.svg";
const Task = () => {
    return (
        <div className={styles.task}>
            <input type="checkbox" />
            <span>Titulo</span>
            <a href="#">
                <img src={cross} alt="" />
            </a>
        </div>
    );
};

export default Task;
