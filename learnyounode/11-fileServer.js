const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	const file = fs.createReadStream('./input/input_3.txt');
	file.pipe(res);
});
server.listen(8080);