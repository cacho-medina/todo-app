//componentes
import Formulario from "../../components/Formulario/Formulario";
import styles from "./Home.module.css";
import { easeInOut, motion } from "framer-motion";

const Home = () => {
    return (
        <section className={`container-fluid ${styles.contenedor} py-5`}>
            <div className="container mb-4">
                <motion.h1
                    initial={{ scale: 0 }}
                    animate={{ scale: 1, rotate: 360 }}
                    transition={{ duration: 0.4, ease: easeInOut, delay: 0.3 }}
                    className="text-light fw-bold display-2 text-center"
                >
                    TO-DO
                </motion.h1>
            </div>
            <div className={`${styles.max} d-flex flex-column gap-4 py-0`}>
                <Formulario></Formulario>
            </div>
        </section>
    );
};

export default Home;
