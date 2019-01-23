const http = require('http');
const concat = require('concat-stream');

const result = [];
let count = 0;

const httpGetter = (index)=>{
	http.get(process.argv[2+index],(response)=>{
		response.setEncoding('utf8');
		response.pipe(concat((data)=>{
			result[index] = data;
			count++;
			if(count===3){
				printResults();
			}
		}));
	});
};

for(let i=0;i<3;i++){
	httpGetter(i);
}

const printResults = ()=>{
	result.forEach(data=>{
		console.log(data);
	});
};