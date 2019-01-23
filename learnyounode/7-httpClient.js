const http = require('http');

const httpGet = ()=>{
	const url = process.argv[2];
	http.get(url,(response)=>{
		response.setEncoding('utf8');
		response.on('data',(data)=>{
			console.log(data);
		});
		response.on('error',(error)=>{
			console.log(error);
		});
	});
};
httpGet();
module.exports = httpGet;