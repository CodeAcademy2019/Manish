onFulfilled = (value)=>{
    console.log(value)
}

const firstPromise = new Promise((fulfill,reject)=>{
    return 'New Value'
})

const secondPromise = firstPromise.then(()=>{
    return 'Other Value'
})

secondPromise.then(onFulfilled)

module.exports = {firstPromise,secondPromise}