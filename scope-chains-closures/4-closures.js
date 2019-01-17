function foo(){
    quux = 10;
    var bar;
    function zip(){
        var quux = 6;
        bar = true;
    }
    return zip;
}