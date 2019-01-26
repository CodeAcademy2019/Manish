const httpCollect = require('./8-httpCollect');

describe('HTTP Client',()=>{
	it('Should return data',(done)=>{
		const callback = (error,data)=>{
			expect(data).toEqual('Hello WorldStill Has Some dataThats allBye');
			done();
		};
		process.argv = ['node','8-httpCollect.js','http://localhost:5000/httpCollect'];
		httpCollect(callback);
	});
	it('Should not return a chunk of data',(done)=>{
		const callback = (error,data)=>{
			expect(data).not.toEqual('Hello World');
			done();
		};
		process.argv = ['node','8-httpCollect.js','http://localhost:5000/httpCollect'];
		httpCollect(callback);
	});
	it('Should return error if server is down',(done)=>{
		const callback = (error)=>{
			expect(error).toEqual('connect ECONNREFUSED 127.0.0.1:5001');
			done();
		};
		process.argv = ['node','8-httpCollect.js','http://localhost:5001/httpCollect'];
		httpCollect(callback);
	});
});