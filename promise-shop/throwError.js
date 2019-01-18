const parsePromised = (input)=>{
    return new Promise((resolve,reject)=>{
        try{
            resolve(JSON.parse(input));
        }catch(e){
            reject(e.message);
        }
    }).then(value=>{
        console.log(value);
        return value;
    }).catch((error)=>{
        console.log(error);
        return error;
    })
}
console.log(parsePromised('{one:1}'));
module.exports = parsePromised;