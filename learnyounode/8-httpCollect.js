const http = require('http');
const concat = require('concat-stream');

const httpCollect = ()=>{
	const url = process.argv[2];
	http.get(url,(response)=>{
		response.pipe(concat((data)=>{
			console.log(data.length);
			console.log(data.toString());
		}));
	});
};

httpCollect();