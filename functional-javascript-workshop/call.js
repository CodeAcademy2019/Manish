module.exports = (...arguments)=>{
    var count = arguments.filter((x)=>{
        return {}.hasOwnProperty.call(x, 'quack')
    })
    return count.length;
}