const http = require('http');
const map = require('through2-map');

const server = http.createServer((req,res)=>{
	if(req.method === 'POST'){
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain');
		req.pipe(map((chunk)=>{
			return chunk.toString().toUpperCase();
		})).pipe(res);
	}
});

server.listen(process.argv[2]);