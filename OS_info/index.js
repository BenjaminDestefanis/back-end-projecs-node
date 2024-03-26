const os = require("os")
const fs = require("fs")

// Seconds to Minutes to Houers

const timeConverter = (seconds) => {
    let hour = Math.floor(seconds / 3600)
    hour = (hour < 10) ? '0' + hour : hour
    let minute = Math.floor((seconds / 60) % 60)
    minute = (minute < 10) ? '0' + minute : minute
    let second = Math.floor(seconds % 60)
    second = (second < 10) ? '0' + second : second

    return `${hour}:${minute}:${second}`
}

const platform = os.platform()
const type = os.type()
const arch = os.arch()
const release = os.release()
const upTime = timeConverter(os.uptime())
const totalMem = os.totalmem()
const freeMem = os.freemem()

const osInfo = `Plataforma : ${platform} \nTypo : ${type} \nArquitectura : ${arch} \nVersion : ${release} \nTiempo Encendido : ${upTime} \nRAM : ${totalMem} \nRAM libre : ${freeMem}}`


const createDocument = (document, infoDocument) => {
    fs.writeFile(document, infoDocument, (err) => {
        if (err){
            console.error(err)
            return
        } else {
            console.log(`OS info created sucess : \n${infoDocument}`)
        }
    })
}


createDocument('info-OS.txt', osInfo)