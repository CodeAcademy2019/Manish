const a = [];

const asynchronousFun = (resolve,reject)=>{
    resolve('PROMISE VALUE')
} 

const mainFun=()=>{
    const promise = new Promise(asynchronousFun);
    promise.then((value)=>{
        console.log(value)
        a.push(value)
    });
    console.log('MAIN PROGRAM')
    a.push('MAIN PROGRAM')
    return promise
}

//mainFun()

module.exports = {mainFun,a}