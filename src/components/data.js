export async function getTasks() {
    const response = await fetch("http://localhost:8080/tasks", {
        method: "GET"
    });
    return await response.json()
}

export async function postTask(task) {
    // console.log(JSON.stringify(task)),
    await fetch("http://localhost:8080/task", {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task),
    })
}

export async function updateTask(task) {
    // console.log(JSON.stringify(task._id)),
    await fetch(`http://localhost:8080/task/${task._id}`, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task)
    })
}

export async function deleteTask(task) {
    console.log(task._id)
    try {
        await fetch(`http://localhost:8080/task/${task._id}`, {
            method: 'DELETE'

        })
    } catch (err) {
        console.log("deleteTask : ", err.message);
    }
    // Appel dans un composant
    // await deleteTask(task)
}