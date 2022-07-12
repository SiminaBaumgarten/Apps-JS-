
let xElem = document.getElementById('x');
let yElem = document.getElementById('y');
let btn = document.getElementById('btn');
let result = document.getElementById('result');


let inputEvent = document.getElementsByClassName('inputEvent');
let modalBtn = document.getElementById('modal-btn');
let closeModalBtn = document.getElementById('close-modal-btn');
let closeModalBtn2 = document.getElementById('close-modal-btn2');
let modal = document.getElementById('modal');
let modalText = document.getElementById('modalText');
let resultContainer = document.getElementById('result-container');
let modalBody = document.querySelector('.modal-body');
let modalClass = document.querySelector('.modal');
let forms = document.querySelectorAll('.needs-validation');
let switchBtn = document.getElementById('flexSwitchCheckDefault');
let fieldset = document.getElementById('fieldset');




  
modalBtn.addEventListener("click", openModal);
closeModalBtn.addEventListener("click", closeModal);
closeModalBtn2.addEventListener("click", closeModal);
//window.addEventListener("click", outsideClick);

switchBtn.addEventListener('change', enableForm);

function enableForm(){
    
    fieldset.toggleAttribute("disabled");
    } 


/*for(let i=0; i < inputEvent.length; i++){
    selectedValue = document.querySelector('input[name="action"]:checked').value;
    console.log(inputEvent[i])
    inputEvent[i].addEventListener("change", function(e)
    {
        btn.disabled = true;
        modalBtn.disabled = true;
        if((xElem.value.length>0) && (yElem.value.length>0) && (selectedValue != "-select-" && selectedValue != "Null")){
            btn.disabled = false;
            modalBtn.disabled = false;
        } else {
            btn.disabled = true;
            modalBtn.disabled = true;
        }
        
    });
}*/

function openModal(e){
    e.preventDefault();
    modal.style.display="block";
    modalText.innerText= result.value;
    resultContainer.style.display="none";

}

function closeModal(){
    modal.style.display="none";
    resultContainer.style.display="block";
}

/*function outsideClick(e){
    if(e.target == modal){
        modal.style.display = "none";
        resultContainer.style.display="block";

    }
}*/

function onDrag({movementX, movementY}){
    let getStyle = window.getComputedStyle(modal);
    let leftValue = parseInt(getStyle.left);
    let topValue =parseInt(getStyle.top);

    modalClass.style.left = `${leftValue + movementX}px`;
    modalClass.style.top = `${topValue + movementY}px`;
}
modalClass.addEventListener('mousedown',()=> {
    modalBody.style.cursor = 'all-scroll';
    modalBody.addEventListener('mousemove', onDrag)
})

document.addEventListener('mouseup', ()=> {
    modalBody.style.cursor = 'default';
    modalBody.removeEventListener('mousemove', onDrag);
})

 


// // Example starter JavaScript for disabling form submissions if there are invalid fields
// (function(){
//     'use strict'
  
//     // Fetch all the forms we want to apply custom Bootstrap validation styles to
//     let forms = document.querySelectorAll('.needs-validation')
  
//     // Loop over them and prevent submission
//     Array.prototype.slice.call(forms)
//       .forEach(function (form) {
//         btn.addEventListener('submit', function (event) {
//           if (!form.checkValidity()) {
//             event.preventDefault()
//             event.stopPropagation()
//           }
  
//           form.classList.add('was-validated')
//         }, false)
//       })
//   })() 


btn.addEventListener("click", selectOption);
function selectOption(event){
    
    event.preventDefault();
    
    let xValue= parseInt(xElem.value);
    let yValue = parseInt(yElem.value);
    
    selectedValue = document.querySelector('input[name="action"]:checked').value;
    
    if(xValue > yValue) { 
        let t = 0;
            xValue = t;
            t = yValue;
            yValue = t;
        }

switch (selectedValue)
            {
                case "sum":
                    result.value= sum(xValue, yValue);
                    break;
                case "diff":
                    result.value = absDiff(xValue, yValue);
                    break;
                case "aritMean":
                    result.value = arithmeticMeanOfOdd(xValue, yValue);
                    break;
                case "theBigestDivisor":
                    result.value = theBigestDivisor(xValue, yValue);
                    break;
                case "theSmallestMultiple":
                    result.value = theSmallestMultiple(xValue, yValue);
                    break;
                case "descendindConcatenationOfNum":
                    result.value = descendindConcatenationOfNum(xValue, yValue);
                    break;
                default:
                        break;
            }           
}


function sum(xValue, yValue){
    let sum2 = xValue + yValue;
    return sum2;
}

function absDiff(xValue, yValue){
    let diff2=Math.abs(xValue - yValue);
    return diff2;

}


function arithmeticMeanOfOdd(xValue, yValue)
        {   
            
            let suma = 0;
            let totalOdds = 0;
            let arithMean = 0;

            for (let i = xValue; i <= yValue; i++)
            {
                if(i % 2 == 1)
                {
                    suma = suma + i;
                    totalOdds++;
                }
                
            }
            arithMean = suma / totalOdds;
            return arithMean;
        }
function theBigestDivisor( xValue, yValue)
        {
            
            let cmmdc = 0;
            for(let i = 1; i <= xValue; i++)
            {
                if(xValue % i == 0 && yValue % i == 0)
                {
                    cmmdc = i;
                }
            }
            return cmmdc;
        }
        
function theSmallestMultiple( xValue, yValue)
        {
           
            let cmmmc = 0;
            for(let i = yValue; 1 == 1; i++)
            {
                if(i % xValue == 0 && i % yValue == 0)
                {
                    cmmmc = i;
                    break;
                }
            }
            return cmmmc;
        }
        
    function descendindConcatenationOfNum( xValue,  yValue)
        {
            
            arr=[];
            
            
            
            for (let i=yValue; i>=xValue; i--)
            {
                if(i % 10 == 8)

                {
                    arr.push(i);
                    arr.join(' and ');
                }
                
            }
            return arr;
        }