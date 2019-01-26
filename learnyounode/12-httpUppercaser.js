const http = require('http');

const server = http.createServer((req,res)=>{
	if(req.method === 'POST'){
		res.statusCode = 200;
		let data = '';
		res.setHeader('Content-Type', 'text/plain');
		req.on('data',(chunk)=>{
			data += chunk.toString().toUpperCase();
		});
		req.on('end',()=>{
			res.end(data);
		});
	}
});

server.listen(8080);