var net = require('net');

const prefillZero = (value)=>{
	return value<10 ? '0'+value : value;
};

const server = net.createServer((socket)=>{
	const date = new Date();
	const result = date.getFullYear()+'-'+prefillZero(date.getMonth()+1)+'-'+prefillZero(date.getDate())+' '+prefillZero(date.getHours())+':'+prefillZero(date.getMinutes()+'\n');
	socket.end(result);
});

server.listen(process.argv[2]);