"use strict";
//export default
export {
    myConverter,
    Converter
}

class myConverter {
    BIN_DICTIONARY = { 
            '0': "0000",
            '1': "0001",
            '2': "0010",
            '3': "0011",
            '4': "0100",
            '5': "0101",
            '6': "0110",
            '7': "0111",
            '8': "1000",
            '9': "1001",
            'a': "1010",
            'b': "1011",
            'c': "1100",
            'd': "1101",
            'e': "1110",
            'f': "1111"
        };

    HEXA_DICTIONARY = {
        'A': 10,
        'B': 11,
        'C': 12,
        'D': 13,
        'E': 14,
        'F': 15,
    };

    TO_HEXA_DICTIONARY = {
        10 : 'A' ,
        11 : 'B',
        12 : 'C',
        13 : 'D',
        14 :'E',
        15 : 'F',
    };

    base;

    constructor(base){
    this.base=base;
    };

    convertToBinary(iV) {
        let result = "";
        
        for (let i = 0; i < iV.length; i++) {
            let chr = iV[i].toLowerCase();
            result += this.BIN_DICTIONARY[chr];
        
        }
    
        return result;
    }

    convertToHexa(inputValue) {
        let result;

        let arr = [];
        let i = inputValue;
        do {
            arr.push(i % 16);
            i = (i - i % 16) / 16;
        }
        while (i > 0);
    
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > 9) {
                arr[j] = this.TO_HEXA_DICTIONARY[arr[j]];
                //arr[j] = arr[j].toString(16).toUpperCase();
            } else {
                arr[j] = arr[j];
            }
        }
        arr.reverse();
        result = "";
        result = arr.join("");
        return result;
    }

    convertToDecimal(inputValue) {
        let result=0;
        let numOfDigits;
        numOfDigits = inputValue.length;
        for (let i = 0; i < numOfDigits; i++) {
            let chr = inputValue[i].toUpperCase();
            let re = /[abcdef]/i;
            if(re.test(inputValue[i])){
                chr = this.HEXA_DICTIONARY[chr];
            }else{
                chr = chr;
            }
            result = Number(result) + Number(chr) * Math.pow(16, numOfDigits - 1 - i);
            };
            return result;
        };

    convertDecToOctal(inputValue){
        let result = "";
        let arr = [];
        do {arr.push(inputValue % 8);
        inputValue = (inputValue - inputValue % 8)/8;
        }
        while(inputValue > 0);
        arr.reverse();
        result = arr.join("");
        return result;
    }

    convertHexToOctal(binaryValue) {
        let octalValue = 0;
        console.log(octalValue)
        let i = 1;
        let remainder;

        while (binaryValue != 0){
            remainder = binaryValue % 10;
            octalValue = octalValue + remainder * i;
            i = i * 2;
            binaryValue = binaryValue / 10;
        };
        return parseInt(octalValue);
    }
}




class Converter {
    convertToBinary(inputValue) {
        return (parseInt(inputValue, 16).toString(2)).padStart(8, '0');   
    }
    
    convertToHexa(inputValue) {
        return Math.abs(inputValue).toString(16).toLocaleUpperCase();
    }
    
    convertToDecimal(inputValue) {
        return parseInt(inputValue, 16);
    
    }

    convertDecToOctal(inputValue) {
        return Math.abs(inputValue).toString(8).toLocaleUpperCase();
    }
    convertHexToOctal(binaryValue) {
        return parseInt(binaryValue, 2).toString(8);
    }
}


