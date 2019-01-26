const http = require('http');
const url = require('url');

const parseTime = date =>(
	{
		hour : date.getHours(),
		minute : date.getMinutes(),
		second : date.getSeconds()
	}
);

const unixTime = date =>({
	unixtime : date.getTime()
});

const server = http.createServer((req,res)=>{
	res.writeHead(200,{'content-type': 'application/json'});
	const urlObject = url.parse(req.url,true);
	if(urlObject.pathname === '/api/parsetime' && urlObject.query['iso']){
		const date = new Date(urlObject.query['iso']);
		res.end(JSON.stringify(parseTime(date)));
	}else if(urlObject.pathname === '/api/unixtime' && urlObject.query['iso']){
		const date = new Date(urlObject.query['iso']);
		res.end(JSON.stringify(unixTime(date)));
	}
});
server.listen(8080);