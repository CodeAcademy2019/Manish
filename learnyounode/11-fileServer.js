const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	const file = fs.createReadStream(process.argv[3]);
	file.pipe(res);
});

server.listen(process.argv[2]);