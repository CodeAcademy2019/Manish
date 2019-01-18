var qio = require('q-io/http')

qio.read('http://localhost:7000')
    .then((value)=>{
        return qio.read('http://localhost:7001/'+value)
    }).then((value)=>{
        console.log(JSON.parse(value))
        return value
    }).catch((error)=>{
        console.log(error.message);
        return error.message
    })