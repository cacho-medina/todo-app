//componentes
import TaskList from "../../components/TaskList/TaskList";
import TaskForm from "../../components/TaskForm/TaskForm";

import styles from "./Home.module.css";

//import { Container } from "react-bootstrap";

const Home = () => {
    return (
        <section className={`container-fluid ${styles.contenedor} py-5`}>
            <h1 className="text-light fw-bold display-2">TODO</h1>
            <TaskForm></TaskForm>
            <TaskList></TaskList>
            
        </section>
    );
};

export default Home;
