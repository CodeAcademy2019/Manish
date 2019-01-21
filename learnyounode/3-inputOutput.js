const fs = require('fs');
const iO = ()=>{
	const inputFile = process.argv[2];
	if(process.argv===undefined)
		return 'No Input File';
	try{
		const buffer = fs.readFileSync(inputFile);
		const data = buffer.toString();
		const dataList = data.split('\n');
		console.log(dataList.length-1);
		return dataList.length-1;
	}catch(err){
		return err.message;
	}
};
iO();
module.exports = iO;