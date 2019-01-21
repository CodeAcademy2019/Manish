const fs = require('fs');

const callback = (err,data)=>{
	if(err){
		console.log(err);
	}
	console.log(data);
};

const iOAsync = (callback)=>{
	const inputFile = process.argv[2];
	if(inputFile===undefined){
		callback('No Input Found');
		return;
	}
	fs.readFile(inputFile,(err,data)=>{
		if(err){
			return callback(err.message);
		}
		const count = data.toString().split('\n').length-1;
		callback(null,count);
	});
};
iOAsync(callback);
module.exports = iOAsync;