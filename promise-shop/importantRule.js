const a = [];
const alwaysThrows = ()=>{
    a.push('OH NOES')
    throw new Error(`OH NOES`);
}
const iterate = (number)=>{
    console.log(number);
    a.push(number)
    return number+1;
}
const promise =  Promise.resolve(iterate(1))
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(alwaysThrows)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .catch(e=>console.log(e.message))

module.exports = {alwaysThrows,iterate,promise,a}