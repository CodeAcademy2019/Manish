module.exports = function(){
    if(process.argv[2]===undefined){
        return `Input string is undefined or empty`
    }
    var inputs = process.argv.slice(2);
    var [,username,email] = inputs;
    var data = {
        username: username,
        email: email
    }
    return data;
}