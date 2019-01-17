function reduce(arr,fn,initial){
    if(arr[0]===undefined)
        return initial;
    var intermediate = fn(initial,arr[0],0,arr);
    return reduce(arr.slice(1),fn,intermediate)
}

module.exports = reduce;