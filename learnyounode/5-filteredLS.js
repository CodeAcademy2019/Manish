const fs = require('fs');

// const callback = (error, fileList) => {
// 	if (error) {
// 		console.log(error);
// 	}
// 	fileList.forEach(fileName => {
// 		console.log(fileName);
// 	});
// };

const filteredLS = (callback) => {
	const inputDir = process.argv[2];
	if (inputDir === undefined) {
		return callback('No Input Found');
	}
	fs.readdir(inputDir, (err, list) => {
		if (err) {
			return callback(err.message);
		}
		const extension = process.argv[3];
		var filteredList = list.filter((fileName) => {
			return fileName.endsWith('.' + extension);
		});
		callback(null, filteredList);
	});
};

// filteredLS(callback);
module.exports = filteredLS;