const calcProfit = (index,inputList)=>{
    const pileOfPurl = inputList.map(x=>10-parseInt(x))
    for(let i=1;i<index;i++){
        pileOfPurl[i] = pileOfPurl[i]+pileOfPurl[i-1];
    }
    let profitIndex = [1];
    let profit = pileOfPurl[0];
    for(let j=1;j<index;j++){
        if(profit===pileOfPurl[j])
            profitIndex.push(j+1)
        else if(profit<pileOfPurl[j]){
            profitIndex = [j+1]
            profit = pileOfPurl[j]
        }
    }
    if(profit<0){
        return [[0],0]
    }
    if(profit===0)
        profitIndex.push(0)
    return [profitIndex,profit];
}

const sortNumber = (a,b)=>{
    return b-a;
}


const resultFormat = (results)=>{
    resultString = '';
    let i = 0;
    results.forEach((eachPile)=>{
        const maxProfit = eachPile.reduce((profit,stackResult)=>{
            return profit+stackResult[1]
        },0)
        const stackPlur = eachPile.reduce((stackPlur,stackResult)=>{
            stackPlur.push(stackResult[0]);
            return stackPlur
        },[])
        let temp = [];
        for(let i=1;i<stackPlur.length;i++){
            for (var x in stackPlur[i-1]){
                for(var y in stackPlur[i]){
                    temp.push(stackPlur[i-1][x]+stackPlur[i][y])
                }
            }
            stackPlur[i]=temp;
            temp = [];
        }
        let plursCount = new Set(stackPlur[stackPlur.length-1].sort(sortNumber).reverse())
        resultString = resultString+(i+1)+'\n';
        resultString = resultString+maxProfit+'\n'
        const count = plursCount.length>20 ? 20 : plursCount.length
        plursCount = [...plursCount]
        let plursCountString = plursCount.slice(1).reduce((accumulator,presentValue)=>{
            return accumulator+' '+presentValue
        },'')
        plursCountString = plursCount[0] +plursCountString
        resultString = resultString + plursCountString
        if(i < results.length-1)
           resultString = resultString+'\n'
        i++
    }) 
    return resultString;
}

const calculate = (input)=>{
    // const input = '1\n6 12 3 10 7 16 5\n2\n5 7 3 10 9 10\n8 1 2 3 4 10 16 10 4\n0'
    let results = []
    inputs = input.split("\n")
    let length = parseInt(inputs[0])
    inputs = inputs.slice(1)
    let continueLoop = false
    if(length>0){
        continueLoop = true;
    }
    while(continueLoop){
        result = [];
        for(let i=0;i<length;i++){
            inputList = inputs[i].split(' ')
            const [profitIndex,profit] = calcProfit(parseInt(inputList[0]),inputList.slice(1))
            result.push([profitIndex,profit])
        }
        inputs = inputs.slice(length)
        length = parseInt(inputs[0])
        inputs = inputs.slice(1)
        if(length==0){
            continueLoop = false;
        }
        results.push(result)
    }
    return resultFormat(results);
}

calculate('3\n3 19 9 2\n5 20 11 10 7 1\n2 18 2\n0')

module.exports = {calculate,calcProfit}