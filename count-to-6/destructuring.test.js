var destructuring = require('./destructuring');

var toEqualArray = {
    comment: ['Return Username and Email',
              'Return undefined for no Input'],
    inputParameters: [['node','destructuring.js',4524,'jdoe','john@doe.com',25,'John','Doe'],
                      ['node','destructuring.js']],
    outputParameters: [{ username: 'jdoe', email: 'john@doe.com' },
                        'Input string is undefined or empty']
};

var notToEqualArray = {
    comment: ['should not return no Input',
              'should not return valid username and email'],
    inputParameters: [['node','destructuring.js',4524,'jdoe','john@doe.com',25,'John','Doe'],
                      ['node','spread.js']],
    outputParameters: ['Input string is undefined or empty',
                        { username: 'jdoe', email: 'john@doe.com' }]
}

describe('Destructuring',()=>{
    for (let i=0;i<toEqualArray.comment.length;i++){
        it(toEqualArray.comment[i],()=>{
            process.argv = toEqualArray.inputParameters[i];
            expect(destructuring()).toEqual(toEqualArray.outputParameters[i]);
        })
    }
    for(let i=0;i<notToEqualArray.comment.length;i++){
        it(notToEqualArray.comment[i],()=>{
            process.argv = notToEqualArray.inputParameters[i];
            expect(destructuring()).not.toEqual(notToEqualArray.outputParameters[i]);
        })
    }
})