const calculateGameScore = require('./program');

describe('Bowling Score',()=>{
	it('Without spare and strikes',()=>{
		expect(calculateGameScore(3,6,3,6,3,6,3,6,3,6,3,6,3,6,3,6,3,6,3,6)).toEqual(90);
	});
	it('Input with a spare',()=>{
		expect(calculateGameScore(6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)).toEqual(16);
	});
	it('Input with a strike',()=>{
		expect(calculateGameScore(10,3,2,4,5)).toEqual(29);
	});
});