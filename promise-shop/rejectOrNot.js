const rejectOrNotFun = (resolve,reject)=>{
    resolve('I FIRED')
    reject(new Error('I DID NOT FIRE'))
}

const promise = new Promise(rejectOrNotFun)
promise.then(console.log,onRejected)

var onRejected = (error)=>{
    console.log(error.message);
}

module.exports = {rejectOrNotFun,promise}