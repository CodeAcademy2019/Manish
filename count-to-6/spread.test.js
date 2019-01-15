var spread = require('./spread')

var toEqualArray = [
    ['Should return minimum value',
     ['node','spread.js',70,85,3,89],
     'The minimum of [70,85,3,89] is 3'],

    ['should return undefined for no input',
     ['node','spread.js'],
     'Input is undefined or empty'],

    ['should return NaN for non Integer Input',
     ['node','spread.js','abc',3,2,1],
     'The minimum of [abc,3,2,1] is NaN']   
];

var notToEqualArray = [
    ['should not return undefined for some input',
     ['node','spread.js',2,1,4,3],
     'Input is undefined or empty'],

    ['should not return some number for Integer Input',
     ['node','spread.js',2,1,4,3],
     'The minimum of [2,1,4,3] is NaN'],
];
describe('Spread Function',()=>{
    toEqualArray.forEach((i)=>{
        it(i[0],()=>{
            process.argv = i[1];
            expect(spread()).toEqual(i[2]);
        })
    })
    notToEqualArray.forEach((i)=>{
        it(i[0],()=>{
            process.argv = i[1];
            expect(spread()).not.toEqual(i[2]);
        })
    }) 
})
