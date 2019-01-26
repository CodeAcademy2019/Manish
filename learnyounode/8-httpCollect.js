const http = require('http');
const concat = require('concat-stream');

// const callback = (error,data)=>{
// 	if(error){
// 		console.log(error);
// 	}
// 	console.log(data);
// };

const httpCollect = (callback)=>{
	const url = process.argv[2];
	http.get(url,(response)=>{
		response.pipe(concat((data)=>{
			callback(null,data.toString());
		}));
	}).on('error',(error)=>{
		callback(error.message);
	});
};

// httpCollect(callback);
module.exports = httpCollect;
