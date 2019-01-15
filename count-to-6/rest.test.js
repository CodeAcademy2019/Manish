var rest = require('./rest');

var toEqualArray = {
    comment: ['should return the average',
              'should return Nan for non Integer Input',
              'should return Nan for undefined Input'],
    inputParameters: [[1,2,3,4],
                      [1,2,3,4,NaN],
                      [1,2,3,4,undefined]],
    outputParameters: [2.5,
                       'Input has a Not-a-Number entry',
                       'Input has a Not-a-Number entry']
};

var notToEqualArray = {
    comment: ['should not return a value for input with NaN',
              'should not return a value for input with undefined'],
    inputParameters: [[1,2,3,4,NaN],
                      [1,2,3,4,undefined]],
    outputParameters: [2,
                       2.5]
}

describe('Average',()=>{
    for (let i=0;i<toEqualArray.comment.length;i++){
        it(toEqualArray.comment[i],()=>{
            expect(rest(...toEqualArray.inputParameters[i])).toEqual(toEqualArray.outputParameters[i]);
        })
    }
    for(let i=0;i<notToEqualArray.comment.length;i++){
        it(notToEqualArray.comment[i],()=>{
            expect(rest(...notToEqualArray.inputParameters[i])).not.toEqual(notToEqualArray.outputParameters[i]);
        })
    }
})



// describe('average',()=>{
//     it('should return the average',()=>{
//         expect(rest(1,2,3,4)).toEqual(2.5);
//     });
//     it('should return the average',()=>{
//         expect(rest(NaN,2,3,4,5)).toEqual('Input has a Not-a-Number entry');
//     });
// })