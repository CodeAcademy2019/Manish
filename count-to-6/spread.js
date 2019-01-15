module.exports = function(){
    if(process.argv[2]===undefined){
        return `Input is undefined or empty`
    }
    var args = process.argv.slice(2);
    return (`The minimum of [${args}] is ${Math.min(...args)}`);
}
