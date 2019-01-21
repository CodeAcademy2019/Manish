const filteredLS = require('./5-filteredLS');

describe('Directory function', () => {
	it('should list files in it', (done) => {
		const callback = (error,list) => {
			expect(list).toEqual(['input_1.txt', 'input_2.txt']);
			done();
		};
		process.argv = ['node', '5-filtered.js', './input', 'txt'];
		filteredLS(callback);
	});


	it('should not return error for an existing directory', (done) => {
		const callback = (error) => {
			expect(error).not.toEqual('ENOENT: no such file or directory, scandir \'./input\'');
			done();
		};
		process.argv = ['node', '5-filtered.js', './input', 'txt'];
		filteredLS(callback);
	});


	it('should return error for no directory', (done) => {
		const callback = (error) => {
			expect(error).toEqual('ENOENT: no such file or directory, scandir \'./output\'');
			done();
		};
		process.argv = ['node', '5-filtered.js', './output', 'txt'];
		filteredLS(callback);
	});


	it('should return error for a file', (done) => {
		const callback = (error) => {
			expect(error).toEqual('ENOTDIR: not a directory, scandir \'./5-filteredLS.js\'');
			done();
		};
		process.argv = ['node', '5-filtered.js', './5-filteredLS.js', 'txt'];
		filteredLS(callback);
	});

	
	it('should return error for No Input', (done) => {
		const callback = (error) => {
			expect(error).toEqual('No Input Found');
			done();
		};
		process.argv = ['node', '5-filtered.js'];
		filteredLS(callback);
	});
});