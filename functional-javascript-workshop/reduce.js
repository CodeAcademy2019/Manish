function countWords(inputWords){
    var counted = inputWords.reduce(function(result,inputWord,index,inputWordsList){
        if(inputWord in result)
            result[inputWord]++;
        else
            result[inputWord] = 1;
        return result;
    },{});
    return counted;
}
module.exports = countWords;