var arrowFunctions = require('./arrowFunctions.js')

var toEqualArray = {
    comment: ['Should return HGM',
              'should return undefined for no input',
              'Should return HGM1'],
    inputParameters: [['node','arrowFunctions.js','Hello','Good','Morning'],
                      ['node','arrowFunctions.js'],
                      ['node','arrowFunctions.js','Hello','Good','Morning',1234]],
    outputParameters: ['[Hello,Good,Morning] becomes \"HGM\"',
                        'Input String is empty',
                        '[Hello,Good,Morning,1234] becomes \"HGM1\"']
};

var notToEqualArray = {
    comment: ['should not return Hgm',
              'should not return undefined for non-empty Input'],
    inputParameters: [['node','arrowFunctions.js','Hello','Good','Morning'],
                      ['node','arrowFunctions.js','Hello','Good','Morning']],
    outputParameters: ['[Hello,Good,Morning] becomes \"Hgm\"',
                       'Input String is Undefined']
}

describe('Arrow Functions',()=>{
    for (let i=0;i<toEqualArray.comment.length;i++){
        it(toEqualArray.comment[i],()=>{
            process.argv = toEqualArray.inputParameters[i];
            expect(arrowFunctions()).toEqual(toEqualArray.outputParameters[i]);
        })
    }
    for(let i=0;i<notToEqualArray.comment.length;i++){
        it(notToEqualArray.comment[i],()=>{
            process.argv = notToEqualArray.inputParameters[i];
            expect(arrowFunctions()).not.toEqual(notToEqualArray.outputParameters[i]);
        })
    }
})