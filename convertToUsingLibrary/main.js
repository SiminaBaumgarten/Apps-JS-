"use strict";
//import myConverter from './converter.js';
import Factory from './converterFactory.js';

const FORMAT_HEX = 1;
const FORMAT_DEC = 2;

//const inputs = ['#432', 'ZZZ', '0XAF', 'AF', 'AFH', '0x31432', 'AEF', '#34A', 'F', 'K', '10H'];
const inputs = ['1323', '4322', '2341', '134', '12', '13', '14', '45654', '3455', '9839', '748789234'];


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
    //let t1 = console.time('Execution Time');
    const start = Date.now();
  
    for (let i = 0; i < 1000000; i++);
    
    //for(let i = 200000; i>=0; --i);
        let inputFormat;
        let convertedValue;
        let binaryValue;
        let inputIsValid;
        let errorMsg;
        inputIsValid = validateInput(input);
        
        //todo: use base inside convertor
        if (inputIsValid) {
            let converterType = getConverterType();
            let base = getBase();
            let converter = Factory.create(base, converterType);
            
            //let converter =  new myConverter(-1);
            //let converter = new Factory(-1);
           
            
            inputFormat = detectInputFormat(input);
            if (inputFormat == FORMAT_HEX) {
                input = removeHexSignature(input);
                if(base == 10){
                    convertedValue = converter.convertToDecimal(input);
                    binaryValue = converter.convertToBinary(input);
                }else if(base == 8){
                    binaryValue = converter.convertToBinary(input);
                    convertedValue = converter.convertHexToOctal(binaryValue);   
                } 
                    
            } else if (inputFormat == FORMAT_DEC) {
                if(base == 16){
                    convertedValue = converter.convertToHexa(input);
                    binaryValue = converter.convertToBinary(convertedValue);
                } else if (base == 8){
                    binaryValue = converter.convertToBinary(input);
                    convertedValue = converter.convertDecToOctal(input);
                } 
                
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
        };
        //let t2 = console.timeEnd('Execution Time');
        
        const duration = Date.now() - start;
        console.log(duration);
        //let executionTime = t2-t1;
        //console.log(executionTime);
        return results;
}



// function generateOptions(CONVERTER_TYPE_MY, CONVERTER_TYPE_CANONIC){
//     let select = document.getElementById('select');
//     console.log(select.value);
//     const option1 = document.createElement('option');
//     option1.textContent = 'CONVERTER_TYPE_MY';
//     console.log(option1)
//     select.appendChild(option1);

//     const option2 = document.createElement('option');
//     option2.textContent = 'CONVERTER_TYPE_CANONIC';
//     console.log(option2)
//     select.appendChild(option2);

// }

function getBase(){
    let base;
    let select = document.getElementById('selectBase');
    select.addEventListener('change', getBase);
    base = select.value;
    return base;
} 

function getConverterType(){
    let converterType;
    let select = document.getElementById('select');
    select.addEventListener('change', getConverterType);
    converterType = select.value;
    return converterType;
}

function printResults(input){
            let convertedResult = convert(input);  
            const list = document.getElementById('list');
            
            //Create tr element
            const row = document.createElement('tr');                                      

            //Insert td                                                                                                      
            row.innerHTML = `                        
                <td>${input}</td>
                <td>${convertedResult.convertedValue}</td>
                <td>${convertedResult.binaryValue}</td>
            `;
            if(convertedResult.errorMsg) {
                row.innerHTML = `                        
                <td>${input}</td>
                <td>${convertedResult.errorMsg}</td>
                <td>${convertedResult.errorMsg}</td>
            `;
                row.style.color = 'red';
            }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
            list.appendChild(row);    
            
            //e.preventDefault();
}


    
function convertEachInput(input){
    printResults(input); 
}

function populateTable(){
    inputs.forEach(convertEachInput);
   
}

function run() {
        const btn = document.getElementById('btn');                                                                                                  
        btn.addEventListener('click', populateTable);     
}

const startPoint = run(); 

