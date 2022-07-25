const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const btn = document.getElementById('btn');
const concatenationOutput = document.getElementById('concatenationOutput');
const numOfLettersOutput = document.getElementById('numOfLettersOutput');
const numOfNumbersOutput = document.getElementById('numOfNumOutput');
const numOfOtherChrOutput = document.getElementById('numOfOtherChrOutput');
const sumOutput = document.getElementById('sumOutput');
const oddConsOutput = document.getElementById('oddConsOutput');
const intercalationOutput = document.getElementById('intercalationOutput');
//const commonChrOutput = document.getElementById('commonChrOutput');
const commonChrInTheSamePositionOutput = document.getElementById('commonChrInTheSamePositionOutput');

function concat() {
    let x = input1.value;
    let y = input2.value;
    let result = x.concat(y);
    return result;
}

function countLetters() {
    let allChr = concat();
    let count = (allChr.match(/[a-zA-Z]/g) || []).length;
    return count;    
}

function countNum() {
    let allChr = concat();
    let count = (allChr.match(/[0-9]/g) || []).length;
    return count;
}

function countOtherChr() {
    let allChr = concat();
    let letters = countLetters();
    let numbers = countNum();
    let otherChr = allChr.length - (letters + numbers);
    return otherChr;
}

function sum() {
    let allChr = concat();
    let sum = 0;
    let arr = (allChr.match(/[0-9]/g) || []);
    for (let i = 0; i < arr.length; i++) {
        sum += parseInt(arr[i]);
        
    }
    return sum;
}

function countOddCons() {
    let x = input1.value;
    let y = input2.value;
    let re = /[^aeiou]/gi;
    let lettersInput1 = x.match(/[a-zA-Z]/g) || [];
    let lettersInput1Str = lettersInput1.toString();
    let consInput1 = lettersInput1Str.match(re);
    

   
    arr1 = [];
    arr2 = [];
    for (let i = 0; i < x.length; i++) {
        
        if (((i % 2) == 0) && consInput1.includes(x[i])) {
            arr1.push(x[i]);
            
        }
    }

    let lettersInput2 = y.match(/[a-zA-Z]/g) || [];
    let lettersInput2Str = lettersInput2.toString();
    let consInput2 = lettersInput2Str.match(re);
    console.log(consInput1);

    for (let i = 0; i < y.length; i++) {
        
        if (((i % 2) == 0) && consInput2.includes(y[i])) {
            arr2.push(y[i]);
          
        }
    }
    const arr = arr1.concat(arr2);
    return arr;
}

function mergeAlternately() {
    let x = input1.value;
    let y = input2.value;
    let result = "";
    for (let i = 0; i < x.length || i < y.length; i++) {
        if (i < x.length) {
            result += x[i];
        } if (i < y.length) {
            result += y[i];
        }
    }
    return result;
}

function findCommonChr() {
    let x = input1.value;
    let y = input2.value;
    let commonChr = '';
    for (let i = 0; i < x.length; i++) {
        if (commonChr.indexOf(x[i]) === -1) {
            if (y.indexOf(x[i]) !== -1) {
                commonChr += x[i];
            }
        }
    }
    return commonChr;
}

function findCommonChrOnTheSamePosition() {
    let x = input1.value;
    let y = input2.value;
    let result = [];
    for (let i = 0; i < x.length; i++) {
        if ((x[i] == y[i]) && (x.indexOf(i)) == (y.indexOf(i))) {
            result += x[i];
        }
    }
    return result;
}

function clearInputs() {
    input1.value = '';
    input2.value = '';
}

function calculate() {
    concatenationOutput.innerHTML = concat();
    numOfLettersOutput.innerHTML = countLetters();
    numOfNumbersOutput.innerHTML = countNum();
    numOfOtherChrOutput.innerHTML = countOtherChr();
    sumOutput.innerHTML = sum();
    oddConsOutput.innerHTML = countOddCons();
    intercalationOutput.innerHTML = mergeAlternately();
    document.getElementById('commonChrOutput').innerHTML = findCommonChr();
    commonChrInTheSamePositionOutput.innerHTML = findCommonChrOnTheSamePosition();

    clearInputs();
}
localStorage.setItem('name', 'Simina');
sessionStorage.setItem('name', 'Ella');


btn.addEventListener('click', calculate);