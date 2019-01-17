var rejectFun = (fulfill,reject)=>{
    setTimeout(()=>{
        reject(new Error('REJECTED!'))
    },300);
}

const promise = new Promise(rejectFun)
promise.then(null,onReject)

var onReject = (error)=>{
    console.log(error.message);
}
module.exports = {rejectFun,promise}