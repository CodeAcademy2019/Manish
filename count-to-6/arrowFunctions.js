module.exports = function(){
    if(process.argv.length<=2){
        return 'Input String is empty';
    }
    var inputs = process.argv.slice(2);
    var results = inputs.map(x=>x+'').map(x=>x[0]).reduce((accumulator,present)=>accumulator+present);
    return (`[${inputs}] becomes \"${results}\"`);
}