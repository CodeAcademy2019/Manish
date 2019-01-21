const iO = require('./3-inputOutput');

describe('Count "\n" in File',()=>{
	it('Should return 0 for Empty File',()=>{
		process.argv = ['node','3-inputOutput.js','./input/input_1.txt'];
		expect(iO()).toEqual(0);
	});
	it('Should return count for Non-Empty File',()=>{
		process.argv = ['node','3-inputOutput.js','./input/input_2.txt'];
		expect(iO()).toEqual(1);
	});
	it('Should return error for No file',()=>{
		process.argv = ['node','3-inputOutput.js','./input/input_3.txt'];
		expect(iO()).toEqual('ENOENT: no such file or directory, open \'./input/input_3.txt\'');
	});
	it('Should not return error for Non-Empty File',()=>{
		process.argv = ['node','3-inputOutput.js','./input/input_2.txt'];
		expect(iO()).not.toEqual('ENOENT: no such file or directory, open \'./input/input_2.txt\'');
	});
});