const promiseFun = (fulfill,reject)=>{
    setTimeout(()=>{
        fulfill('FULFILLED!')
    },300);
}

var promise = new Promise(promiseFun)
promise.then(console.log)
module.exports = {promiseFun, promise}