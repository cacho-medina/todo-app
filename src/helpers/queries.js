const url = "http://localhost:4001/api/tareas";

export const getTareas = async () => {
    try {
        const tareas = await fetch(url);
        return tareas;
    } catch (error) {
        console.error(error);
    }
};

export const crearTarea = async (tarea) => {
    try {
        const nuevaTarea = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(tarea),
        });
        return nuevaTarea;
    } catch (error) {
        console.error(error);
    }
};

export const editTarea = async (data, id) => {
    try {
        const res = await fetch(`${url}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: data,
        });
        return res;
    } catch (error) {
        console.error(error);
    }
};

export const deleteTarea = async (id) => {
    try {
        const res = await fetch(`${url}/${id}`, {
            method: "DELETE",
        });
        return res;
    } catch (error) {
        console.error(error);
    }
};
