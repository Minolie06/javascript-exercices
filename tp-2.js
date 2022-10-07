//Exercice 1.1
function sumTwoNumbers(number1, number2) {
    //check type
    //force round
    return number1 + number2
}

//Exercice 1.2
function sumNumbers() {
    let result = 0
    Array.from(arguments).forEach(number => {
        result += number
    });
    return result
}

function sumNumbersB() {
    return Array.from(arguments).reduce(sumTwoNumbers)
}

const sumNumbersC = (...numbers) => numbers.reduce(sumTwoNumbers)

//Exercice 2
function allLongestStrings(stringArray) {
    let maxLength = 0
    stringArray.forEach(str => {
        if(maxLength < str.length) maxLength = str.length
    });
    
    let result = []
    stringArray.forEach(str => {
        if(maxLength === str.length) result.push(str)
    });
    return result
}

function allLongestStringsB(stringArray) {
    const maxLength = Math.max(...stringArray.map(str => str.length))
    return stringArray.filter(str => maxLength === str.length)
}

const test2 = ["aba", "aa", "ad", "vcd", "aba", "a"]

//Exercice 3

function alternatingSums(numberArray) {
    let result = [0,0]
    numberArray.forEach((number, index) => {
        result[index%2] += number
    })
    return result
}

function alternatingSumsB(numberArray) {
    const even = numberArray.filter((element, index) => index%2 === 0)
    const odd = numberArray.filter((element, index) => index%2 === 1)
    return [sumNumbers(...even), sumNumbers(...odd)]
}

function alternatingSumsC(numberArray) {
    const sumEven = numberArray.filter((element, index) => index%2 === 0).reduce((a,b) => a + b, 0)
    const sumOdd = numberArray.filter((element, index) => index%2 === 1).reduce((a,b) => a + b, 0)
    return [sumEven, sumOdd]
}

const alternatingSumsD = (numberArray) =>[0,0].map((sum, i) => numberArray.filter((element, index) => index%2 === i).reduce((a,b) => a + b, sum))

//Exercice 4
function replaceNumberInArray(numberArray, oldNumber, newNumber) {
    return numberArray.map(number => number === oldNumber ? newNumber : number)
}

const test4 = [1,2,1]

//Exercice 5


