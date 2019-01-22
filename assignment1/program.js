// const frameScore = 0;
// const score = ()=>{
// 	return result;
// };

// const roll = ((pins)=>{
// 	return pins;
// });

const calculateGameScore = (...scores)=>{
	const frameScores = formatInputToFrameScores(scores);
	const result = frameScores.reduce((accumulator,presentValue)=>{
		return accumulator+presentValue;
	},0);
	return result;
};

const formatInputToFrameScores = ((scores)=>{
	const frameScores = scores.reduce((accumulator,presentValue,presentIndex)=>{
		if(presentIndex%2===0){
			accumulator.push(presentValue);
		}else{
			const firstRoll = accumulator.pop();
			accumulator.push(presentValue+firstRoll);
		}
		return accumulator;
	},[]);
	return frameScores;
});

module.exports = calculateGameScore;

// calculateGameScore(3,6,3,6,3,6,3,6,3,6,3,6,3,6,3,6,3,6,3,6);