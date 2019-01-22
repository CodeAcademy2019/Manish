const calculateGameScore = (...scores)=>{
	const frameScores = formatInputToFrameScores(scores);
	const result = frameScores.reduce((accumulator,presentValue)=>{
		return accumulator+presentValue[1];
	},0);
	return result;
};

const formatInputToFrameScores = ((scores)=>{
	const frameScores = scores.reduce((accumulator,presentValue,presentIndex)=>{
		if(presentValue===10){
			accumulator.push([10,10]);
		}else if(presentIndex===0){
			accumulator.push(presentValue);
		}
		else{
			const previousValue = accumulator.pop();
			if(typeof(previousValue)==='number'){
				let frameScore = previousValue+presentValue;
				let presentFrameScore = [previousValue,frameScore];
				let previousFrameScore = accumulator.pop();
				if(previousFrameScore!==undefined){
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