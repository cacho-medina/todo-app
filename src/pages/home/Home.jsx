//componentes
import Formulario from "../../components/Formulario/Formulario";
import styles from "./Home.module.css";

const Home = () => {
    return (
        <section className={`container-fluid ${styles.contenedor} py-5`}>
            <div className="container mb-4">
                <h1 className="text-light fw-bold display-2 text-center">
                    TO-DO
                </h1>
            </div>
            <div className={`${styles.max} d-flex flex-column gap-4 py-0`}>
                <Formulario></Formulario>
            </div>
        </section>
    );
};

export default Home;
