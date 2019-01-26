const timeServer = require('./9-timeServer');
const net = require('net');
const port = 5001;

describe('Time Server',()=>{
	it('Should return the current date and time',()=>{
		const callback = (data)=>{
			expect(data.toString()).toEqual(timeServer.createDate());
			// done();
		};
		const client = net.connect(port);
		client.on('data',callback);
	});
	it('should not receive anything other than date from port', () => {
		const callback = (data) => {
			expect(data.toString()).not.toEqual('some Value');
			// done();
		};
		const client = net.connect(port);
		client.on('data', callback);
	});
});

describe('Prepending Zero',()=>{
	it('should return "0"+value for value<10',()=>{
		expect(timeServer.prefillZero(6)).toEqual('06');
	});
	it('should not return "0"+value for value>10',()=>{
		expect(timeServer.prefillZero(16)).not.toEqual('016');
	});
	it('should not return value for value>10',()=>{
		expect(timeServer.prefillZero(16)).toEqual('16');
	});
});