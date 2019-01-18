const qio = require('q-io/http')

var localLink = 'http://localhost:1337/'

const readJSON = (value)=>{
    return qio.read(value).then((value)=>{
        return JSON.parse(value);
    }).then((value)=>{
        console.log(value);
        return value;
    }).catch((error)=>{
        console.log(error.message)
        return error.message
    })
}

readJSON(localLink)

module.exports = readJSON;