const os = require("os")
const fs = require("fs")


let platform = os.platform()
let type = os.type()
let arch = os.arch()
let release = os.release()
let upTime = os.uptime()
let totalMem = os.totalmem()
let freeMem = os.freemem()
let cpus = os.cpus()
let hostName = os.hostname()
let machine = os.machine()
let versionOs = os.version()
let infoUser = os.userInfo()
let ethernetInfo = os.networkInterfaces().Ethernet
let address = ethernetInfo[1].address
let mac = ethernetInfo[1].mac
let IP = ethernetInfo[1].cidr

//console.log(os.networkInterfaces())
//console.log(os.networkInterfaces().Ethernet)



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

// Memory Coversor

const conversMemory = (memory) => {
    let memoryInKb = memory / 1024
    let memoryInMb = memoryInKb / 1024
    let memoryInGb = memoryInMb / 1024

    memoryInKb = Math.floor(memoryInKb)
    memoryInMb = Math.floor(memoryInMb)
    memoryInGb = Math.floor(memoryInGb)

    let respond = `${memoryInGb} GB - ${memoryInMb} MB`
    return respond
}

upTime = timeConverter(upTime)
totalMem = conversMemory(totalMem)
freeMem = conversMemory(freeMem)


// Cores and username

let numCores = 0
let modelCore
infoUser = infoUser.username

for(let i = 0; i < cpus.length; i++){
    numCores++
    if(!modelCore){
        modelCore = cpus[i].model
    }
}

numCores = numCores.toString()

const osInfo = `Plataforma : ${platform} \nTypo : ${type} \nArquitectura : ${arch} - ${machine} \nVersion : ${release} \nTiempo Encendido : ${upTime} \nRAM : ${totalMem} \nRAM libre : ${freeMem} \nNumbers of Cores : ${numCores} \nCPU Model : ${modelCore} \nHostname : ${hostName} \nOS Version : ${versionOs} \nUsername : ${infoUser} \nAddress : ${address} \nMAC : ${mac} \nIP : ${IP}`

//console.log(osInfo)
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