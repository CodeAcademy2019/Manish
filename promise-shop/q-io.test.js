var qio = require('./q-io');

var testLink = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json'
var localLink = 'http://localhost:1337/'

var returnJSON = {
    "squadName" : "Super hero squad",
    "homeTown" : "Metro City",
    "formed" : 2016,
    "secretBase" : "Super tower",
    "active" : true,
    "members" : [
      {
        "name" : "Molecule Man",
        "age" : 29,
        "secretIdentity" : "Dan Jukes",
        "powers" : [
          "Radiation resistance",
          "Turning tiny",
          "Radiation blast"
        ]
      },
      {
        "name" : "Madame Uppercut",
        "age" : 39,
        "secretIdentity" : "Jane Wilson",
        "powers" : [
          "Million tonne punch",
          "Damage resistance",
          "Superhuman reflexes"
        ]
      },
      {
        "name" : "Eternal Flame",
        "age" : 1000000,
        "secretIdentity" : "Unknown",
        "powers" : [
          "Immortality",
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel"
        ]
      }
    ]
  }

describe('Promise from HTTP Read',()=>{
    it('Resolve with an error',()=>{
        return expect(qio(localLink)).resolves.toEqual("connect ECONNREFUSED 127.0.0.1:1337");
    })
    it('Resolve with JSON object',()=>{
        return expect(qio(testLink)).resolves.toEqual(returnJSON);
    })
})