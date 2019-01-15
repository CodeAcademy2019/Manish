module.exports = function average(...argv){
    var result = argv.reduce((sum,currValue)=>sum+currValue,0);
    if (isNaN(result)){
        return 'Input has a Not-a-Number entry'
    }
    return result/argv.length;
}