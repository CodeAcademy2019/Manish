const warmUp = ()=>{
    //console.log('before warmUp');
    setTimeout(()=>{
        console.log('TIMED OUT!')
    },300);
    //console.log('after warmUp');
}

warmUp();
module.exports = warmUp;