const colors = require('colors')


document.getElementById('deleteForm').addEventListener('submit', deleteTask)


console.log("ASD")
// function Delete Task

const deleteTask = async () => {
    console.log("Debbug")
    //event.preventDefault()

    const idTask = document.getElementById('delete_id_name').value

    try{
        
        const response = await fetch(`/deleteTask/${idTask}`, { method: 'DELETE'})

        const data = await response.text()
        console.log(data)
        console.log('Task successfully deleted'.yellow)
    } catch (error){
        console.log('Error: '.red , error)
    }
}