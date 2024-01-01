import { Form, Button } from "react-bootstrap";

const TaskForm = () => {
    return (
        <>
            <Form>
                <Form.Group className="d-flex justify-content-between gap-2">
                    <Form.Control type="text" placeholder="Ingrese tarea..." />
                    <Button variant="outline-secondary">Agregar</Button>
                </Form.Group>
            </Form>
        </>
    );
};

export default TaskForm;
