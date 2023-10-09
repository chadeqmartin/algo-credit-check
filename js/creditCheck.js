const creditCheck = (strCreditNum) => {
    if (strCreditNum.length !== 16){
        return "The number is invalid!";
    }

    let digitsToSum = 0;
   
    for (let i = 15; i >= 0; i--){
        if (i % 2 !== 0){
            digitsToSum += +strCreditNum[i];
        } else {
            digitsToSum += getDigitSumIfOverNine(+strCreditNum[i])
        }
    }
     
    return digitsToSum % 10 === 0 ? 
      "The number is valid!" : "The number is invalid!";
}

const getDigitSumIfOverNine = (num) => {
    num *= 2
    return num > 9 ? calculateSum(num) : num
}

const calculateSum = (numToCalculate) => {

    return numToCalculate.toString().split('').reduce((a, b) => (a * 1) + (b * 1))
}

module.exports = {creditCheck, getDigitSumIfOverNine, calculateSum}