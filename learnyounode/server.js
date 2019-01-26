const http = require('http');

const server = http.createServer((req,res)=>{
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	if(req.url === '/httpClient'){
		res.end('Hello World');
	}
	if(req.url === '/httpCollect'){
		res.write('Hello World');
		res.write('Still Has Some data');
		res.write('Thats all');
		res.end('Bye');
	}
	if(req.url === '/httpJugling'){
		res.end('Hello');
	}
});

server.listen(5000);