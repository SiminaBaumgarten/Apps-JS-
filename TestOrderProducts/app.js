const filteredElements = search();

function search(){
    let searchBtn = document.getElementById("searchBtn");
    searchBtn.addEventListener("click", filter);
}


function filter(){ 
    let arr;
    inputTxt = document.getElementById("filterEl").value;
    minTxt = document.getElementById("minEl").value;
    maxTxt = document.getElementById("maxEl").value;
    let spanRows = document.getElementsByClassName("spanRow");
    arr = Array.prototype.slice.call(spanRows);
    for (let i = 0; i < arr.length; i++){
        arr[i].style.visibility = "collapse";
        if(arr[i].textContent.includes(inputTxt) && (Number(spanRows[i].children[2].textContent>=minTxt)) && (Number(spanRows[i].children[2].textContent<=maxTxt))){
            arr[i].style.visibility = "visible";
        }
    }
    printQty();
}

function hideSpansRow(e){
    if(e.target.classList.contains("editBtn")){
        e.target.parentElement.parentElement.style.visibility='collapse';
        e.target.parentElement.parentElement.nextElementSibling.style.visibility='visible';
    }
}

function hideControllersRow(e){
    let product="";
    let qty="";
    let comment="";
    if(e.target.classList.contains("saveBtn")){
        controlRow = e.target.parentElement.parentElement;
        product = controlRow.children[0].children[0].value;
        switch(product){
            case '1':
                product = "Apples";
                break;
            case '2': 
                product = "Potatoes";
                break;
            case '3':
                product = "Tomatoes";
                break;
            default:
                product = "Please choose something";
        }

        comment = controlRow.children[1].children[0].value;
        qty = controlRow.children[2].children[0].value;
        
        spanRow = e.target.parentElement.parentElement.previousElementSibling;
        productSpan = spanRow.children[0].children[0];
        commentSpan = spanRow.children[1].children[0];
        qtySpan = spanRow.children[2].children[0];

        productSpan.innerHTML = product;
        commentSpan.innerHTML = comment;
        qtySpan.innerHTML = qty; 
        
        if(productSpan.innerHTML === "Please choose something" || commentSpan.innerHTML === "" || qtySpan.innerHTML === ""){
            e.target.parentElement.parentElement.style.borderColor = "red"; 
        }
        
        
        e.target.parentElement.parentElement.style.visibility='collapse';
        e.target.parentElement.parentElement.previousElementSibling.style.visibility='visible';
        
        printQty();
    }
}

function updateQtyAfterFilter(){
    let result = 0; 
    let arr = [];
    let qtySpan
}

function updateQty(){
    let result = 0;
    let arr = [];
    let qtySpans = document.querySelectorAll('.spanQty');
    arr = Array.from(qtySpans);

    for(let i = 0; i < arr.length; i++){
        if(arr[i].parentElement.parentElement.style.visibility == "visible"){
            result += Number(arr[i].textContent);
        }
         
    }
    //result = Number(qtySpans[0].textContent) + Number(qtySpans[1].textContent) + Number(qtySpans[2].textContent) + Number(qtySpans[3].textContent) + Number(qtySpans[4].textContent);
    return result;
}

function printQty(){
    totalQty = updateQty();
    totalQtyParag = document.getElementById('totalQty');
    totalQtyParag.innerHTML = totalQty;
}



function run(){
    document.body.addEventListener('click', hideSpansRow);
    document.body.addEventListener('click', hideControllersRow);
}

const startPoint = run();

