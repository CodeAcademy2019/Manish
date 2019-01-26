const httpClient = require('./7-httpClient');

describe('HTTP Client',()=>{
	it('Should return data',(done)=>{
		const callback = (error,data)=>{
			expect(data).toEqual('Hello World');
			done();
		};
		process.argv = ['node','7-httpClient.js','http://localhost:5000/httpClient'];
		httpClient(callback);
	});
	it('Should return error if server is down',(done)=>{
		const callback = (error)=>{
			expect(error).toEqual('connect ECONNREFUSED 127.0.0.1:5001');
			done();
		};
		process.argv = ['node','7-httpClient.js','http://localhost:5001/httpClient'];
		httpClient(callback);
	});
});