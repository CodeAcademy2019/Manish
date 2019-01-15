var default2 = require('./default2')

var toEqualArray = {
    comment: ['should return 2 "!" after input',
              'should return string length "!" after input'],
    inputParameters: [['hi',2],
                      ['hello']],
    outputParameters: ['hi!!',
                       'hello!!!!!']
};

var notToEqualArray = {
    comment: ['should not return string length "!" after input'],
    inputParameters: [['hello',2]],
    outputParameters: ['Hello, JOHN!\nYour name lowercased is \"JOHN"\.']
}

describe('Default Arguments for Pattern',()=>{
    for (let i=0;i<toEqualArray.comment.length;i++){
        it(toEqualArray.comment[i],()=>{
            expect(default2(...toEqualArray.inputParameters[i])).toEqual(toEqualArray.outputParameters[i]);
        })
    }
    for(let i=0;i<notToEqualArray.comment.length;i++){
        it(notToEqualArray.comment[i],()=>{
            expect(default2(...notToEqualArray.inputParameters[i])).not.toEqual(notToEqualArray.outputParameters[i]);
        })
    }
})