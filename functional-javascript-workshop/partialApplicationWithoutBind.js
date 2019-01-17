var slice = Array.prototype.slice
module.exports = (namespace)=>{
    return (...inputs)=>{
        console.log.apply(console,[namespace].concat(slice.call(inputs)))
    }
}