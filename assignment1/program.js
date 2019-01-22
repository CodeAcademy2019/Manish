const calculateGameScore = (...scores)=>{
	const frameScores = formatInputToFrameScores(scores);
	const result = frameScores.reduce((accumulator,presentValue)=>{
		return accumulator+presentValue[1];
	},0);
	return result;
};

const formatInputToFrameScores = ((scores)=>{
	const intermediateScore1 = scores.reduce((accumulator,preValue,preIndex,arr)=>{
		if(accumulator.length%2==0 && preValue==10){
			let score = 10;
			if(arr[preIndex+1]!==undefined){
				score += arr[preIndex+1];
			}
			if(arr[preIndex+2]!==undefined){
				score += arr[preIndex+2];
			}
			accumulator.push(score,0);
		}
		else{
			let score = 0;
			if(accumulator.length%2==0 && preValue+arr[preValue-1]==10){
				if(arr[preIndex+1]!==undefined){
					score = preValue+arr[preIndex+1];
				}
				accumulator.push(score);
			}else{
				accumulator.push(preValue);
			}
		}
		return accumulator;
	},[]);
	const frameScores = intermediateScore1.reduce((accumulator,presentValue,presentIndex)=>{
		if(presentIndex===0){
			accumulator.push(presentValue);
		}
		else{
			const previousValue = accumulator.pop();
			if(typeof(previousValue)==='number'){
				let frameScore = previousValue+presentValue;
				let presentFrameScore = [previousValue,frameScore];
				let previousFrameScore = accumulator.pop();
				if(previousFrameScore!==undefined){
					// if a frame exists to pop
					if(previousFrameScore[0]===10){
						previousFrameScore[1]+=presentFrameScore[1];
					}else if(previousFrameScore[1]===10){
						previousFrameScore[1]+=presentFrameScore[0];
					}
					accumulator.push(previousFrameScore,presentFrameScore);
				}
				else{
					accumulator.push(presentFrameScore);
				}
			}else{
				accumulator.push(previousValue,presentValue);
			}
		}
		return accumulator;
	},[]);
	return frameScores;
});

module.exports = calculateGameScore;

// formatInputToFrameScores(3,6,3,6,3,6,3,6,3,6,3,6,3,6,3,6,3,6,3,6);