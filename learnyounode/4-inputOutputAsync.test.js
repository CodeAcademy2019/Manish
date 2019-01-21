const iOAsync = require('./4-inputOutputAsync');

describe('Count "\n" in File',()=>{
	it('Should return 0 for Empty File',(done)=>{
		function callback(error,length){
			expect(length).toEqual(0);
			done();
		}
		process.argv = ['node','3-inputOutput.js','./input/input_1.txt'];
		iOAsync(callback);
	});


	it('Should return count for Non-Empty File',(done)=>{
		const callback = (error,length)=>{
			expect(length).toEqual(1);
			done();
		};
		process.argv = ['node','3-inputOutput.js','./input/input_2.txt'];
		iOAsync(callback);
	});


	it('Should return error for No file',(done)=>{
		function callback(error){
			expect(error).toEqual('ENOENT: no such file or directory, open \'./input/input_3.txt\'');
			done();
		}
		process.argv = ['node','3-inputOutput.js','./input/input_3.txt'];
		iOAsync(callback);
	});


	it('Should not return error for Non-Empty File',(done)=>{
		function callback(error){
			expect(error).not.toEqual('ENOENT: no such file or directory, open \'./input/input_2.txt\'');
			done();
		}
		process.argv = ['node','3-inputOutput.js','./input/input_2.txt'];
		iOAsync(callback);
	});


	it('Should return error for No Input',(done)=>{
		function callback(error){
			expect(error).toEqual('No Input Found');
			done();
		}
		process.argv = ['node','3-inputOutput.js'];
		iOAsync(callback);
	});
});