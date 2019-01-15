function getShortMessages(messages){
    var messageArray = [];
    messageArray = messages.filter(function(messageObject){
        return messageObject.message.length<50;
    }).map(messageObject=>messageObject.message);
    return messageArray;
}

module.exports = getShortMessages;