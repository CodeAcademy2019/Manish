const addNumbers = require('./2-addNumbers');

describe('Adding Numbers',()=>{
	it('Should return 6 for [1,2,3]',()=>{
		process.argv = ['node','2-addNumbers.js','1','2','3'];
		expect(addNumbers()).toEqual(6);
	});
	it('Should return 0 for undefined',()=>{
		process.argv = ['node','2-addNumbers.js','abc','def'];
		expect(addNumbers()).toEqual(0);
	});
	it('Should return 0 for No Input',()=>{
		process.argv = ['node','2-addNumbers.js'];
		expect(addNumbers()).toEqual(0);
	});
	it('Should not return 0 for an Input',()=>{
		process.argv = ['node','2-addNumbers.js','2','3'];
		expect(addNumbers()).not.toEqual(0);
	});
	it('Should return -6 for [-1,-2,-3]',()=>{
		process.argv = ['node','2-addNumbers.js','-1','-2','-3'];
		expect(addNumbers()).toEqual(-6);
	});
});