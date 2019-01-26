const http = require('http');

// const callback = (error,data)=>{
// if(error){
// 	console.log(error);
// }
// 	console.log(data);
// };

// console.log('Hello');

const httpGet = (callback,url)=>{
	http.get(url,(response)=>{
		response.setEncoding('utf8');
		let data = '';
		response.on('data',(chunk)=>{
			data += chunk;
		});
		response.on('error',(error)=>{
			callback(error.message);
		});
		response.on('end',()=>{
			callback(null,data);
		});
	}).on('error',(error)=>{
		callback(error.message);
	});
};
// httpGet(callback);
module.exports = httpGet;