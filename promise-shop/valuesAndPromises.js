const attachTitle = (value)=>{
    return `DR. ${value}`
}
const firstPromise = new Promise((resolve,reject)=>{
    resolve(`MANHATTAN`)
})
const secondPromise = firstPromise.then(attachTitle)

secondPromise.then(console.log)

module.exports = {firstPromise,secondPromise}