import fs from "fs"

function fsStatPromisified(path){
    return new Promise((resolve,reject)=>{
        fs.stat(path,(err,stats)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(stats)
            }
        })
    })
}

function fsReaddirPromisified(path){
    return new Promise((resolve,reject)=>{
        fs.readdir(path, (err,files) => {
            if(err){
                reject(err)
            }else{
                resolve(files)
            }
        })
        
    })
}


export function sizeOfFileAtPathUsingPromises(path){
        return fsStatPromisified(path)
        .then((stats)=>{
            if(stats.isFile()){
                return stats.size
            }
            else if(stats.isDirectory()){
                return fsReaddirPromisified(path).then((files)=>{
                    const promises=files.map((file)=>sizeOfFileAtPathUsingPromises(path+"/"+file))
                    return Promise.all(promises)
                    .then((sizes)=> sizes.reduce((acc,size)=>acc+size,0))
                })
            }
        })
}

