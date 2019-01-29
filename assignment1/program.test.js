const score = require('./test');

// describe('Bowling Score',()=>{
// 	it('Without spare and strikes',()=>{
// 		expect(calculateGameScore(3,6,3,6,3,6,3,6,3,6,3,6,3,6,3,6,3,6,3,6)).toEqual(90);
// 	});
// 	it('with a spare',()=>{
// 		expect(calculateGameScore(6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)).toEqual(16);
// 	});
// 	it('with a strike',()=>{
// 		expect(calculateGameScore(10,3,2,4,5)).toEqual('Invalid Input');
// 	});
// 	it('with a strike and spare',()=>{
// 		expect(calculateGameScore(10,5,5,9,0)).toEqual('Invalid Input');
// 	});
// 	it('with all 10 score',()=>{
// 		expect(calculateGameScore(10,10,10,10,10,10,10,10,10,10,10,10)).toEqual(300);
// 	});
// 	it('with a special 10th Frame',()=>{
// 		expect(calculateGameScore(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10)).toEqual(30);
// 	});
// 	it('should return the total final score of the bowling', () => {
// 		expect(calculateGameScore(6, 4, 3, 0, 10, 10, 5, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)).toEqual(69);
// 	});
// 	it('should return 0 for no input', () => {
// 		expect(calculateGameScore()).toEqual('Invalid Input');
// 	});
// 	it('should return Invalid Input for 9 frames and 1 throw in 10th', () => {
// 		expect(calculateGameScore(10,10,10,10,10,10,10,10,3,8,2,7)).toEqual('Invalid Input');
// 	});
// 	it('should return not consider it as a strike if 10 pins are down in second throw', () => {
// 		expect(calculateGameScore(0, 0, 0, 0, 0, 10, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)).toEqual(30);
// 	});
// });

describe('Bowling', function () {
	describe('Check game can be scored correctly.', function () {
		it('should be able to score a game with all gutterballs', function () {
			var rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			expect(score(rolls)).toEqual(0);
		});

		it('should be able to score a game with no strikes or spares', function () {
			var rolls = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
			expect(score(rolls)).toEqual(90);
		});

		it('a spare followed by zeros is worth ten points', function () {
			var rolls = [6, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			expect(score(rolls)).toEqual(10);
		});

		it('points scored in the roll after a spare are counted twice', function () {
			var rolls = [6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			expect(score(rolls)).toEqual(16);
		});

		it('consecutive spares each get a one-roll bonus', function () {
			var rolls = [5, 5, 3, 7, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			expect(score(rolls)).toEqual(31);
		});

		it('should allow fill ball the last frame is a spare', function () {
			var rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 3, 7];
			expect(score(rolls)).toEqual(17);
		});

		it('a strike earns ten  points in a frame with a single roll', function () {
			var rolls = [10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			expect(score(rolls)).toEqual(10);
		});

		it('points scored in the two rolls after a strike are counted twice as a bonus', function () {
			var rolls = [10, 5, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			expect(score(rolls)).toEqual(26);
		});

		it('should be able to score multiple strikes in a row', function () {
			var rolls = [10, 10, 10, 5, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			expect(score(rolls)).toEqual(81);
		});

		it('should allow fill balls when the last frame is a strike', function () {
			var rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 7, 1];
			expect(score(rolls)).toEqual(18);
		});

		it('rolling a spare with the two-roll bonus does not get a bonus roll', function () {
			var rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 7, 3];
			expect(score(rolls)).toEqual(20);
		});

		it('strikes with the two-roll bonus do not get bonus rolls', function () {
			var rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10];
			expect(score(rolls)).toEqual(30);
		});

		it('a strike with the one-roll bonus after a spare in the last frame does not get a bonus', function () {
			var rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 3, 10];
			expect(score(rolls)).toEqual(20);
		});

		it('should be able to score a perfect game', function () {
			var rolls = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
			expect(score(rolls)).toEqual(300);
		});
	});

	describe('Check game rules.', function () {

		it('two bonus rolls after a strike in the last frame can score more than 10 points if one is a strike', function () {
			var rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 6];
			expect(score(rolls)).toEqual(26);
		});

		it('an unstarted game cannot be scored', function () {
			var rolls = [];
			expect(function () { score(rolls); }).toThrow(
				new Error('Score cannot be taken until the end of the game'));
		});

		it('an incomplete game cannot be scored', function () {
			var rolls = [0, 0];
			expect(function () { score(rolls); }).toThrow(
				new Error('Score cannot be taken until the end of the game'));
		});


		it('bonus rolls for a strike in the last frame must be rolled before score can be calculated', function () {
			var rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10];
			expect(function () { score(rolls); }).toThrow(
				new Error('Score cannot be taken until the end of the game'));
		});

		it('both bonus rolls for a strike in the last frame must be rolled before score can be calculated', function () {
			var rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10];
			expect(function () {score(rolls); }).toThrow(
				new Error('Score cannot be taken until the end of the game'));
		});

		it('bonus roll for a spare in the last frame must be rolled before score can be calculated', function () {
			var rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 3];
			expect(function () { score(rolls); }).toThrow(
				new Error('Score cannot be taken until the end of the game'));
		});

	});
});