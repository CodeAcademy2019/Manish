const http = require('http');

describe('Http Uppercase',()=>{
	it('Should return uppercased content',()=>{
		const callback=(data)=> {
			expect(data).toEqual('MANISH');
		};
		const request = http.request({
			host: '127.0.0.1',
			port: 8080,
			method: 'POST',
		}, (response) => {
			response.setEncoding('utf8');
			response.on('data', callback);
			response.on('error', console.log);
		});
		request.write('manish');
	});
    
	it('should convert the incoming POST body characters to upper-case', (done) => {
		function callback(data) {
			console.log(data);
			expect(data).not.toEqual('abcdef');
			done();
		}
		const request = http.request({
			host: '127.0.0.1',
			port: 7002,
			method: 'POST',
		}, (response) => {
			response.setEncoding('utf8');
			response.on('data', callback);
			response.on('error', console.log);
		});
		request.write('abcdef');
	});
});