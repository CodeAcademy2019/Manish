const modularFunction = require('./6-modular_module');

// const callback = (err,data)=>{
// 	if(err){
// 		console.log(err);
// 	}
// 	data.forEach(fileName => {
// 		console.log(fileName);
// 	});
// };

// modularFunction(process.argv[2],process.argv[3],callback);

module.exports = (callback) =>{
	if(process.argv[2]===undefined){
		return callback('No Input Found');
	}
	modularFunction(process.argv[2],process.argv[3],callback);
};