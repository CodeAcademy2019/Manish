const fs = require('fs');
module.exports = (pathName,extension,callback)=>{
	fs.readdir(pathName,(err,list)=>{
		if(err){
			return callback(err.message);
		}
		const fileList = list.filter((fileName)=>{
			return fileName.endsWith('.'+extension);
		});
		callback(null,fileList);
	});
};