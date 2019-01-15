var templateStrings = require('./templateStrings')

var toEqualArray = {
    comment: ['should print john with given template',
              'should return undefined for no input'],
    inputParameters: [['node','spread.js','JOHN'],
                      ['node','spread.js']],
    outputParameters: ['Hello, JOHN!\nYour name lowercased is \"john"\.',
                        'Input String is Undefined']
};

var notToEqualArray = {
    comment: ['should not print JOHN(Capitalized)',
              'should not return undefined for non-empty Input'],
    inputParameters: [['node','spread.js','JOHN'],
                      ['node','spread.js','JOHN']],
    outputParameters: ['Hello, JOHN!\nYour name lowercased is \"JOHN"\.',
                       'Input String is Undefined']
}

describe('Template Strings',()=>{
    for (let i=0;i<toEqualArray.comment.length;i++){
        it(toEqualArray.comment[i],()=>{
            process.argv = toEqualArray.inputParameters[i];
            expect(templateStrings()).toEqual(toEqualArray.outputParameters[i]);
        })
    }
    for(let i=0;i<notToEqualArray.comment.length;i++){
        it(notToEqualArray.comment[i],()=>{
            process.argv = notToEqualArray.inputParameters[i];
            expect(templateStrings()).not.toEqual(notToEqualArray.outputParameters[i]);
        })
    }
})
