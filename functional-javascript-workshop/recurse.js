function reduce(arr,fn,initial){
    if(arr[0]==undefined){
        return {};
    }
    return Object.assign(fn(initial,arr[0],0,arr),reduce(arr.slice(1),fn,initial));
     
}

module.exports = reduce;