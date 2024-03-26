const fs = require("fs")

const createFile = (fileName, content) => {
    fs.writeFile(fileName, content, (err) => {
        if(err){
            console.error(err)
            return
        } else {
            console.log(`Archivo ${fileName} a sido creado con exitosamente`)
        }
    })
}

const readingFile = (fileName) => {
    fs.readFile(fileName, 'utf-8', (err, data) => {
        if (err){
            console.error(err)
            return
        } else {
            console.log(`Info of archive ${fileName}: \n ${data}`)
        }
    })
}

