module.exports = function midpoint(lower=0,upper=1){
    var mid = (lower+upper)/2;
    if(isNaN(mid)){
        return 'Invalid Arguments'
    }
    return mid;
}