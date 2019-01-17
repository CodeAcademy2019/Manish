var slice = Array.prototype.slice
var sliceFun = slice.call.bind(slice)
module.exports = (namespace)=>{
    // return console.log.bind(console,namespace)
    return (...inputs)=>{
        console.log.apply(console,[namespace].concat(sliceFun(inputs)))
    }
}