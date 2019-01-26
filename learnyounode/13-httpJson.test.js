const client = require('./7-httpClient');

describe('main', () => {
	it('should send file contents at http URL', (done) => {
		let callback=(error,data)=> {
			expect(data).toEqual('{"hour":17,"minute":40,"second":15}');
			done();
		};
		client (callback,'http://localhost:8080/api/parsetime?iso=2013-08-10T12:10:15.474Z');
	});
	it('should not send anything other than file contents at http URL', (done) => {
		let callback=(error,data)=> {
			expect(data).toEqual('{"unixtime":1376136615474}');
			done();
		};
		client (callback,'http://localhost:8080/api/unixtime?iso=2013-08-10T12:10:15.474Z');
	});
});