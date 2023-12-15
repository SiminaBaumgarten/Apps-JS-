let select = document.getElementById('select');
let selectCategory = document.getElementById('selectCategory');
let qtyElem = document.getElementById('qty-input');
let priceElem = document.getElementById('price-input');
let btn = document.getElementById('btn');
let outputContainer = document.getElementById('outputContainer');
let userTable = document.getElementById('user-table');
let adminTable = document.getElementById('admin-table');
let totalProductsElem = document.getElementById('totalProducts');
let totalQtyElem = document.getElementById('totalQty');
let totalPriceElem = document.getElementById('totalPrice');
let totalProductOutput = document.getElementById('total-product-output');
let totalQtyOutput = document.getElementById('total-qty-output');
let totalPriceOutput = document.getElementById('total-price-output')
let form = document.querySelector(".needs-validation");
let modal = document.getElementById('modal');
let modalRemoveBtn = document.getElementById('modalRemoveBtn');
let checkboxSelectAll = document.getElementById('checkboxSelectAll');
let checkboxUnSelectAll = document.getElementById('checkboxUnSelectAll');
let removeAllRows = document.getElementById('removeAllRows');
let product = "";
let qty = 0;
let pricePerKg = 0;
let linePrice = 0;
let totalProducts = 0;
let totalQty = 0;
let totalPrice = 0;
let prodArr =[];
let numberCounter = 1;
let lastButtonClicked;


function refreshTableRowColour(){
    let tr = userTable.rows;
    for(i=1; i<tr.length; i++){
        
            tr[i].style.backgroundColor = '#ffffff';

    }
}

function alternateColourUserTable(){
    refreshTableRowColour();
    let tr = userTable.rows;
    for(i=1; i<tr.length; i++){
        if(i%2==1){
            tr[i].style.backgroundColor = '#d3d3d3';
        }
    }
}
function alternateColourAdminTable(){
    let tr = adminTable.rows;
    for(i=1; i<tr.length; i++){
        if(i%2==1){
            tr[i].style.backgroundColor = '#d3d3d3';
        }
    }
}

function populate(s1, s2){
    let s1 = document.getElementById(s1);
    let s2 = document.getElementById(s2);
    s2.innerHTML = "";
    //var optionArrayDefault = ["-select-|-select-"];
    if(s1.value == 'fruits'){
        let optionArray = ["-select-|-select-", "Apples | Apples", "Bananas | Bananas", "Oranges | Oranges"];
    } else if (s1.value == "vegetables"){
        let optionArray = ["-select-|-select-", "Carrots | Carrots", "Onions | Onions", "Potatoes | Potatoes", "Tomatoes | Tomatoes"];
    } else if(s1.value == "others"){
        let optionArray = ["-select-|-select-", "Rice | Rice", "Pasta | Pasta", "Milk | Milk"]
    }
    for(let option in optionArray){
        let pair = optionArray[option].split("|");
        let newOption = document.createElement('option');
        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        s2.options.add(newOption);
    }
   
}



btn.addEventListener('click', function(e){
    e.preventDefault();
    if(select.value == "-select-" || qtyElem.value == "" || priceElem.value == "" || qtyElem.value <= 0 || priceElem.value <= 0){
        alert("Invalid input");
    }else{
        
        outputContainer.classList.remove('invisible');
        product = select.value;
        qty = parseInt(qtyElem.value);
        pricePerKg = parseFloat(priceElem.value);
        linePrice = qty * pricePerKg;
        
        addToDetails();
        alternateColourUserTable();
        //alternateColourAdminTable();
        numberCounter++;
        calculateNumberOfProducts();
        calculateTotalQty();
        calculateTotalPrice();
        addToSumary();
        form.classList.add('was-validated')  
        clearInputs(); 
         
    }
    
    
}, //form.classList.add('was-validated')
);



function clearInputs(){
    //form.classList.remove('was-validated');
    //form.classList.add('needs-validation');
    qtyElem.value = "";
    priceElem.value = "";
    selectCategory.value = "-select-";
    select.value = "-select-";
    for(let i=select.length-1; i > 0; i--){
        select.options[i] = null;
    }
    
}



function addToDetails(){
    let row = userTable.insertRow(-1);
    let cell1 = row.insertCell(0);
    cell1.classList.add('indexClass');
    let cell2 = row.insertCell(1);
    cell2.classList.add('prodClass');
    let cell3 = row.insertCell(2);
    cell3.classList.add('qtyClass')
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    cell5.classList.add('linePriceClass');
    let cell6 = row.insertCell(5);
    

    //CREATE BUTTON
    let removeBtn = document.createElement('button');
    removeBtn.innerText = 'Remove';
    removeBtn.classList.add('btn');
    removeBtn.classList.add('btn-danger');
    removeBtn.setAttribute('data-bs-toggle', "modal"); 
    removeBtn.setAttribute('data-bs-target', '#exampleModal');
    
    //CREATE DIV FOR CHECKBOX

    //CREATE CHECKBOX
    // let checkbox = document.createElement('INPUT');
    // checkbox.setAttribute('type', 'checkbox');
    // checkbox.classList.add('checkbox');
    
    

    // let numCountContainer = document.createElement('SPAN');
    // let numCountContainerTextNode = document.createTextNode(numberCounter);
    // numCountContainer.appendChild(numCountContainerTextNode);
    
    
    // cell1.appendChild(numCountContainer);
    // cell1.appendChild(checkbox);
    // console.log(cell1);

    cell1.innerHTML = `<input type="checkbox" class="chkSelect">&nbsp&nbsp<span id="numCountSpan">${numberCounter}</span>`;
    cell2.innerText = select.value;
    cell3.innerText = qtyElem.value;
    cell4.innerText = priceElem.value;
    cell5.innerText = linePrice.toFixed(2);
    cell6.appendChild(removeBtn);

   

    //remove row
    removeBtn.addEventListener('click', function(e) {
        lastButtonClicked = removeBtn; //e.target
        
    });
    
    alternateColourUserTable();
    alternateColourAdminTable();
};


checkboxSelectAll.addEventListener('click', function(){
    selectAllRows();
});

function selectAllRows(){
    let checkboxList = document.getElementsByClassName('chkSelect');
    for(let i = 0; i<checkboxList.length; i++) {
        checkboxList[i].checked = true;
    } 
}


checkboxUnSelectAll.addEventListener('click', function(){
    unSelectAllRows();
});

function unSelectAllRows(){
    let checkboxList = document.getElementsByClassName('chkSelect');
    for(let i = 0; i<checkboxList.length; i++) {
        checkboxList[i].checked = false;
    }
}


removeAllRows.addEventListener('click', function(){
    let checkboxList = document.getElementsByClassName('chkSelect');
    
    for(let i = checkboxList.length-1; i>=0; i--) {
        
        if(checkboxList[i].checked){
           
        lastButtonClicked=checkboxList[i].parentElement.parentElement.lastChild.querySelector('button');
        deleteRow();  
      
        };
    }
});

// function deleteAllRows() {
//     let checkbox = document.getElementsByClassName('checkbox');
//     for(let i = 0; i<checkbox.length; i++) {
//         if(checkbox[i].checked == true){
//           deleteRow();  
//         };
//     }
// }



modalRemoveBtn.addEventListener('click', function(){
            deleteRow();
            //alternateColourUserTable();
        });


    function deleteRow(){
        
        
        let delRow = lastButtonClicked.parentElement.parentElement;
        // let delCell = delRow.querySelector('.checkbox');
        // let checkbox = delCell.textContent;
        let delCell =  delRow.querySelector('.prodClass');
        let delProduct = delCell.textContent;
        delCell = delRow.querySelector('.qtyClass');
        calculateTotalQtyAfterRemove(delCell.textContent);
        delCell = delRow.querySelector('.linePriceClass');
        calculateTotalPriceAfterRemove(delCell.textContent);

        lastButtonClicked.parentElement.parentElement.remove();
        
        calculateNumberOfProductsAfterRemove(delProduct);
        
        recalculateIndexesForUserTable();
        
        addToSumary();
       

    }


    alternateColourUserTable();
    alternateColourAdminTable();


function calculateNumberOfProductsAfterRemove(delProduct){
    let productStillExists = false;
    let trArr = userTable.getElementsByTagName('tr');
    for(let j = 1; j<trArr.length; j++){
        let rowX = trArr[j];
        let cellX = rowX.querySelector('.prodClass');
       
        if(delProduct == cellX.textContent){
            productStillExists = true;
            break;
        }   
    }

    if(!productStillExists){
        let index = prodArr.indexOf(delProduct);
        prodArr.splice(index, 1);
        prodArr.sort();
        totalProducts = prodArr.length;
        totalProductOutput.innerText = totalProducts;
    }
       
}


function calculateTotalQtyAfterRemove(delQty){
    totalQty = totalQty - parseInt(delQty);
    totalQtyOutput.innerText = totalQty;
}

function calculateTotalPriceAfterRemove(delPrice){
    totalPrice = totalPrice - parseFloat(delPrice); 
    totalPriceOutput.innerText = totalPrice;

}

function recalculateIndexesForUserTable(){
    let trArr = userTable.getElementsByTagName('tr');
    numberCounter = 1;
    for(let i = 1; i<trArr.length; i++){
        let cellX = trArr[i].querySelector('#numCountSpan');
        
        cellX.innerText = numberCounter++;
        
        alternateColourUserTable();
    }
    
}

function calculateNumberOfProducts(){
    if(!prodArr.includes(product)){
        prodArr.push(product);
        totalProducts = prodArr.length;
        totalProductOutput.innerText = totalProducts;
    }
    prodArr.sort();
   
}


function calculateTotalQty(){
    totalQty = totalQty + parseInt(qtyElem.value);
    totalQtyOutput.innerText = totalQty;
}

function calculateTotalPrice(){
    totalPrice = totalPrice + linePrice;
    totalPriceOutput.innerText = totalPrice.toFixed(2);

}

function addToSumary(){
    let adminRowsCount = adminTable.getElementsByTagName('tr').length;
    let adminNumberCounter = 0;
    for (let i = adminRowsCount - 1; i > 0; i--) {
        adminTable.deleteRow(i);
    }
    for(let i=0; i<prodArr.length; i++){
        let currProduct=prodArr[i];
        adminNumberCounter ++;
        let currQty = 0;
        let currAvgPrice = 0;
        let currLinePrice = 0;
        let trArr = userTable.getElementsByTagName('tr');
        for(let j = 1; j<trArr.length; j++){
            let rowX = trArr[j];
            let cellX = rowX.querySelector('.prodClass');
            if(currProduct == cellX.textContent){
                cellX = rowX.querySelector('.qtyClass');
                currQty+= parseInt(cellX.textContent);
                cellX = rowX.querySelector('.linePriceClass');
                currLinePrice += parseFloat(cellX.textContent);  
            }
            
        }
        currAvgPrice = currLinePrice/currQty;
        
        
        let row = adminTable.insertRow(-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        let cell3 = row.insertCell(2);
        let cell4 = row.insertCell(3);
        let cell5 = row.insertCell(4);
        let cell6 = row.insertCell(5);

        cell1.innerText = adminNumberCounter;
        cell2.innerText = currProduct;
        cell3.innerText = currQty;
        cell4.innerText = currAvgPrice.toFixed(2);
        cell5.innerText = currLinePrice.toFixed(2);
        
    }
   
    alternateColourAdminTable();
}
