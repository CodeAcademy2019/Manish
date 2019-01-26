const client = require('./7-httpClient');

describe('File Server',()=>{
	it('Should return contents from the file',()=>{
		const callback = (error,data)=>{
			expect(data).toEqual('Hello\nHi');
		};
		client(callback,'http://localhost:8080');
	});
});