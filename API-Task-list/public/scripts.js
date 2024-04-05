
const deleteTask = async () => {
    event.preventDefault()
    
    const idTask = document.getElementById("delete_id_name").value

    try {
        const response = await fetch(`/deleteTask/${idTask}`, {method : 'DELETE'})
        const data = await response.text()
        console.log(data)
        console.log('Task successfully deleted')
    } catch (error) {
        console.log("ERROR : ", error)
    }


}


document.getElementById("deleteForm").addEventListener("submit", deleteTask)

