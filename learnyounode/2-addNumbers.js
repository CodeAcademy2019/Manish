const addNumbers = ()=>{
	const numbers = process.argv.slice(2);
	if(numbers.length===0)
		return 0;
	const result = numbers.reduce((accumulator,presentValue)=>{
		return accumulator+parseInt(presentValue);
	},0);
	console.log(result);
	if(isNaN(result))
		return 0;
	return result;
};

addNumbers();
module.exports = addNumbers;