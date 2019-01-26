const calcProfit = (index, inputList) => {
    const pileOfPurl = inputList.map(x => 10 - parseInt(x))
    for (let i = 1; i < index; i++) {
        pileOfPurl[i] = pileOfPurl[i] + pileOfPurl[i - 1];
    }
    let profitIndex = [1];
    let profit = pileOfPurl[0];
    for (let j = 1; j < index; j++) {
        if (profit === pileOfPurl[j])
            profitIndex.push(j + 1)
        else if (profit < pileOfPurl[j]) {
            profitIndex = [j + 1]
            profit = pileOfPurl[j]
        }
    }
    if (profit < 0) {
        return [[0], 0]
    }
    if (profit === 0)
        profitIndex.push(0)
    return [profitIndex, profit];
}

const sortNumber = (a, b) => {
    return b - a;
}

const resultFormat = (results) => {
    resultString = '';
    let i = 0;
    results.forEach((eachPile) => {
        const maxProfit = eachPile.reduce((profit, stackResult) => {
            return profit + stackResult[1]
        }, 0)
        const stackPlur = eachPile.reduce((stackPlur, stackResult) => {
            stackPlur.push(stackResult[0]);
            return stackPlur
        }, [])
        let temp = [];
        for (let i = 1; i < stackPlur.length; i++) {
            for (var x in stackPlur[i - 1]) {
                for (var y in stackPlur[i]) {
                    temp.push(stackPlur[i - 1][x] + stackPlur[i][y])
                }
            }
            stackPlur[i] = temp;
            temp = [];
        }
        let plursCount = new Set(stackPlur[stackPlur.length - 1].sort(sortNumber).reverse())
        resultString = resultString + (i + 1) + '\n';
        resultString = resultString + maxProfit + '\n'
        const count = plursCount.length > 20 ? 20 : plursCount.length
        plursCount = [...plursCount]
        if (plursCount.length > 20)
            plursCount = plursCount.slice(0, 20)
        let plursCountString = plursCount.slice(1).reduce((accumulator, presentValue) => {
            return accumulator + ' ' + presentValue
        }, '')
        plursCountString = plursCount[0] + plursCountString
        resultString = resultString + plursCountString
        if (i < results.length - 1)
            resultString = resultString + '\n'
        i++
    })
    return resultString;
}

const calculate = (input) => {
    // const input = ''
    let results = []
    inputs = input.split("\n")
    let length = parseInt(inputs[0])
    inputs = inputs.slice(1)
    let continueLoop = false
    if (length > 0) {
        continueLoop = true;
    }
    while (continueLoop) {
        result = [];
        for (let i = 0; i < length; i++) {
            inputList = inputs[i].split(' ')
            const [profitIndex, profit] = calcProfit(parseInt(inputList[0]), inputList.slice(1))
            result.push([profitIndex, profit])
        }
        inputs = inputs.slice(length)
        length = parseInt(inputs[0])
        inputs = inputs.slice(1)
        if (length == 0) {
            continueLoop = false;
        }
        results.push(result)
    }
    return resultFormat(results);
}

calculate('4\n11 3 4 11 9 11 9 11 12 7 14 6\n19 16 17 18 19 1 7 5 3 3 11 12 8 9 13 12 11 11 11 2\n3 13 16 17\n14 3 13 13 21 11 12 9 7 5 4 5 12 13 5\n0')

module.exports = { calculate, calcProfit }