const all = (promise1,promise2)=>{
    var counter = 0;
    var arr = [];
    return new Promise((resolve,reject)=>{
        promise1.then((val)=>{
            arr[0] = val;
            counter++; 
            if(counter>=2)
                resolve(arr)
        })
        promise2.then((val)=>{
            arr[1] = val;
            counter++; 
            if(counter>=2)
                resolve(arr)
        })
        
    })
}

all(getPromise1(),getPromise2()).then(console.log);

module.exports = all;