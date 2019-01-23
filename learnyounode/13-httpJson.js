const http = require('http');
const url = require('url');

const server = http.createServer((req,res)=>{
	res.writeHead(200,{'content-type': 'application/json'});
	const urlObject = url.parse(req.url,true);
	if(urlObject.pathname === '/api/parsetime' && urlObject.query['iso']){
		console.log(urlObject.query['iso']);
		const date = new Date();
		res.end(JSON.stringify({'hour':date.getHours(),'minute': date.getMinutes(),'seconds': date.getSeconds()}));
		// res.end(urlObject.query['iso']);
	}else if(urlObject.pathname === '/api/unixtime' && urlObject.query['iso']){
		console.log(urlObject.query['iso']);
		const date = new Date();
		res.end(JSON.stringify({'unixtime': date.getTime()}));
	}
	res.end('Hello');
});
server.listen(process.argv[2]);