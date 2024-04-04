function actualDate(){
    const date = new Date()

    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()
    let minutes = date.getMinutes()
    let hours = date.getHours()

    const newDate = `${day}/${month}/${year} ${hours}:${minutes} Hs`
    
    return newDate

}

module.exports = { actualDate }