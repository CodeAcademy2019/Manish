const calculateGameScore = require('./program');

describe('Bowling Score',()=>{
	it('Without spare and strikes',()=>{
		expect(calculateGameScore(3,6,3,6,3,6,3,6,3,6,3,6,3,6,3,6,3,6,3,6)).toEqual(90);
	});
});