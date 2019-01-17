var foot = {
    kick: function(){
        this.yelp = 'Ouch!';
        setImmediate(()=>{
            console.log(this.yelp);
        });
        //return this.yelp;
    }
};

foot.kick();

module.exports = foot;