module.exports = function(){
    if(process.argv[2]===undefined)
        return `Input String is Undefined or empty`
    return (`Hello, ${process.argv[2]}!\nYour name lowercased is \"${process.argv[2].toLowerCase()}"\.`);
}