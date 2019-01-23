const http = require('http');

const port = 5000;

const server = http.createServer((req,res)=>{
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	if(req.url==='/Hello'){
		res.end('Hello');
	}else if(req.url==='/World'){
		res.end('World');
	}else if(req.url==='/'){
		res.end('Hello World');
	}
});

server.listen(port,()=>{
	console.log(port);
});