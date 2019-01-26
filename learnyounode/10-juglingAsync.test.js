const juglingAsync = require('./10-juglingAsync');

describe('HTTP Jugiling',()=>{
	xit('Should return data',(done)=>{
		const callback = (err,data)=>{
			expect(data).toEqual(['Hello World','Hello WorldStill Has Some dataThats allBye','Hello']);
			done();
		};
		process.argv = ['node','8-httpCollect.js','http://localhost:5000/httpClient','http://localhost:5000/httpCollect','http://localhost:5000/httpJugling'];
		juglingAsync(callback);
	});
	it('Should not return data out of order',(done)=>{
		const callback = (err,data)=>{
			expect(data).not.toEqual(['Hello','Hello World','Hello WorldStill Has Some dataThats allBye']);
			done();
		};
		process.argv = ['node','8-httpCollect.js','http://localhost:5000/httpClient','http://localhost:5000/httpCollect','http://localhost:5000/httpJugling'];
		juglingAsync(callback);
	});
	it('Should return error if server is down',(done)=>{
		const callback = (error)=>{
			expect(error).toEqual('connect ECONNREFUSED 127.0.0.1:5001');
			done();
		};
		process.argv = ['node','8-httpCollect.js','http://localhost:5001/httpClient','http://localhost:5001/httpCollect','http://localhost:5001/httpJugling'];
		juglingAsync(callback);
	});
});