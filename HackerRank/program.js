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
    return [profitIndex,profit];
}

const calculate = ()=>{
    const input = "1\n6 12 3 10 7 16 5\n2\n5 7 3 10 9 10\n8 1 2 3 4 10 16 10 4\n0"
    let result = []
    inputs = input.split("\n")
    let length = parseInt(inputs[0])
    inputs = inputs.slice(1)
    let continueLoop = false
    if(length>0){
        continueLoop = true;
    }
    while(continueLoop){
        for(let i=0;i<length;i++){
            inputList = inputs[i].split(' ')
            console.log(inputList)
            const [profitIndex,profit] = calcProfit(parseInt(inputList[0]),inputList.slice(1))
            console.log([profitIndex,profit])
        }
        inputs = inputs.slice(length)
        length = parseInt(inputs[0])
        inputs = inputs.slice(1)
        if(length==0){
            continueLoop = false;
        }
    }
    return inputs
}
// console.log(calcProfit(5,['7','3','10','9','10']))
calculate()