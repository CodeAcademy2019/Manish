const handleTenthFrame = (result, secondThrow,ThirdThrow)=>{
	result = (secondThrow!==undefined) ? result-secondThrow : result;
	result = (ThirdThrow!==undefined) ? result-ThirdThrow : result;
	return result;
};
let tenthframeScore = [];
const throwScoresToFrameScores = (accumulator,presentValue,presentIndex)=>{
	if(presentIndex%2===0){
		accumulator.push(presentValue);
	}else{
		accumulator.push(accumulator.pop()+presentValue);
	}
	return accumulator;
};

const spareOrStrike = (addScores)=>{
	let extraScore = 0;
	addScores.forEach((score)=>{
		extraScore = (score!==undefined) ? extraScore+score : extraScore;
	});
	return extraScore;
};

const inputToThrowScores = (accumulator,presentValue,presentIndex,scores)=>{
	let presentScore = presentValue;
	if(presentScore>10){
		presentScore = NaN;
	}else if(accumulator.length===18){
		tenthframeScore.push(presentScore);
	}else if(accumulator.length>18){
		presentScore+=accumulator.pop();
		tenthframeScore.push(presentScore);
	}else if(accumulator.length%2===0 && presentValue===10){
		presentScore+=spareOrStrike([scores[presentIndex+1],scores[presentIndex+2]]);
		accumulator.push(0);
	}else if(accumulator.length%2===1 && presentValue+scores[presentIndex-1]===10){
		presentScore+=spareOrStrike([scores[presentIndex+1]]);
	}else if(accumulator.length%2===1 && presentValue+scores[presentIndex-1]>10){
		presentScore = NaN;
	}
	accumulator.push(presentScore);
	return accumulator;
};

const calculateGameScore = (scores)=>{
	const frameScores = formatInputToFrameScores(scores);
	if(frameScores.length<10){
		throw new Error('Score cannot be taken until the end of the game');
	}
	let result = frameScores.reduce((accumulator,presentValue)=>{
		return accumulator+presentValue;
	},0);
	if(isNaN(result)){
		throw new Error('Score cannot be taken until the end of the game');
	}
	// if(!tenthframeScore[1]){
	// 	throw new Error('Score cannot be taken until the end of the game');
	// }
	// if(tenthframeScore[1]>=10 && !tenthframeScore[2]){
	// 	throw new Error('Score cannot be taken until the end of the game');
	// }
	return handleTenthFrame(result,frameScores[10],frameScores[11]);
};

const formatInputToFrameScores = (scores)=>{
	const intermediateScore = scores.reduce(inputToThrowScores,[]);
	const frameScores = intermediateScore.reduce(throwScoresToFrameScores,[]);
	return frameScores;
};

calculateGameScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10]);

module.exports = calculateGameScore;