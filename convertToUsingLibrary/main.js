"use strict";
import myConverter from './converter.js';
const FORMAT_HEX = 1;
const FORMAT_DEC = 2;

const inputs = [1323, 4322, 2341, 134, 2, 3, 4, 45654, 3455, 9839, 748789234, '0x31432', 'AEF', '#34A'];
inputs.forEach(function(input){
    function removeHexSignature(input) {
        let result = '';
        let result1 = '';
        let re = /^([0X]|[0X]|[#])/;
        let re2 = /^([x]|[X])/;
        let re3 = /h$/i;
        
        let inputWithoutOnePrefix = input.replace(re, "");
        result1 = inputWithoutOnePrefix.replace(re2, "");
        result = result1.replace(re3, "");
        return result;
    }

    function containsOnlyNumbers(input) {
        let pattern = /^[0-9]*$/;
        return pattern.test(input);
    }

    function detectInputFormat(input) {
        let result = "";
        if (containsOnlyNumbers(input)) {
            result = FORMAT_DEC;
        } else {
            result = FORMAT_HEX;
        }

        return result;
    }

    function validateInput(input) {
        let result = true;
        let pattern = /^#*([a-f]|[A-F]|[0-9]|[0x]|[0X]|[hH])*$/;
        if (pattern.test(input)) {
            result = true;
        } else {
            result = false;
        }
        //check if input contains non-hexa & non-numeric characters and chars is one of the #, x, h.
        return result;
    }

    function convert(input) {
        let inputFormat;
        let convertedValue;
        let binaryValue;
        let inputIsValid;
        let errorMsg;
        inputIsValid= validateInput(input);
        
        let converter = new myConverter(-1);
        //todo: use base inside convertor
        if (inputIsValid) {
        
            inputFormat = detectInputFormat(input);
            if (inputFormat == FORMAT_HEX) {
                input = removeHexSignature(input);
                convertedValue = converter.convertToDecimal(input);
                binaryValue = converter.convertToBinary(input);
            } else if (inputFormat == FORMAT_DEC) {
                convertedValue = converter.convertToHexa(input);
                binaryValue = converter.convertToBinary(convertedValue);
            } else {
                errorMsg = "Unkown Input Format";
            }
                
        
        } else {
            errorMsg = "Invalid input";
        } 
        let results = {
            convertedValue: convertedValue,
            binaryValue: binaryValue,
            inputFormat: inputFormat,
            errorMsg: errorMsg
        }
        return results;
    }


    function printResults(e){
        e.preventDefault();

            let convertedResult = convert(input);  
            const list = document.getElementById('list');
            
            //Create tr element
            const row = document.createElement('tr');                                      

            //Insert td                                                                                                      
            row.innerHTML = `                        
                <td id>${input}</td>
                <td>${convertedResult.convertedValue}</td>
                <td>${convertedResult.binaryValue}</td>
            `;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
            list.appendChild(row);                                   
    }

    function run() {
        const btn = document.getElementById('btn');                                                                                                  
        btn.addEventListener('click', printResults);
    }

    run(); 

})                                                                                     