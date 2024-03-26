const os = require("os")
const fs = require("fs")

const platform = os.platform()
const type = os.type()
const arch = os.arch()
const release = os.release()
const upTime = os.uptime()
const totalMem = os.totalmem()
const freeMem = os.freemem()

const osInfo = `Plataroma : ${platform} \n
                Typo : ${type} \n
                `


const createDocument = (document, infoDocument) => {
    fs.writeFile(document, infoDocument, (err) => {
        if (err){
            console.error(err)
            return
        } else {
            console.log(`OS info created sucess [${infoDocument}]`)
        }
    })
}

let myArr = [1,2,3,4,5]

//createDocument('info-OS.txt', platform)