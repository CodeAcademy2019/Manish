module.exports = function makeImportant(stringValue,count=stringValue.length){
    var result = stringValue+'!'.repeat(count);
    return result;
}