const http = require('http');
const concat = require('concat-stream');

const result = [];
let count = 0;

const httpGetter = (url,index,printResults)=>{
	http.get(url,(response)=>{
		response.setEncoding('utf8');
		response.pipe(concat((data)=>{
			result[index] = data;
			count++;
			if(count===3){
				printResults(null, result);
			}
		}));
	}).on('error',(error)=>{
		printResults(error.message);
	});
};

const httpFunction = (printResults)=>{
	for(let i=0;i<3;i++){
		httpGetter(process.argv[2+i],i,printResults);
	}
};

// const printResults = (error,result)=>{
// if(error){
// 	console.log(error);
// }
// 	result.forEach(data=>{
// 		console.log(data);
// 	});
// };

// httpFunction(printResults);
module.exports = httpFunction;