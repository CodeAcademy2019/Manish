var net = require('net');

const prefillZero = (value)=>{
	return value<10 ? '0'+value : ''+value;
};

const createDate = ()=>{
	const date = new Date();
	date.getFullYear()+'-'+prefillZero(date.getMonth()+1)+'-'+prefillZero(date.getDate())+' '+prefillZero(date.getHours())+':'+prefillZero(date.getMinutes()+'\n');
};

const server = net.createServer((socket)=>{
	const result = createDate();
	socket.end(result);
});

server.listen(5001);

module.exports = {prefillZero,createDate};