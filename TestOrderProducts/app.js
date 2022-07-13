
//EVENT DELEGATION
document.body.addEventListener('click', hideSpansRow);

function hideSpansRow(e){
    if(e.target.classList.contains("editBtn")){
        e.target.parentElement.parentElement.style.visibility='collapse';
        e.target.parentElement.parentElement.nextElementSibling.style.visibility='visible';
    }
}


document.body.addEventListener('click', hideControllersRow);
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
        console.log(product, comment, qty);
        
        
        spanRow = e.target.parentElement.parentElement.previousElementSibling;
        productSpan = spanRow.children[0].children[0];
        commentSpan = spanRow.children[1].children[0];
        qtySpan = spanRow.children[2].children[0];

        productSpan.innerHTML = product;
        commentSpan.innerHTML = comment;
        qtySpan.innerHTML = qty;

        console.log('commentSpan ', comment);
        console.log('qtySpan ', qtySpan);
        console.log('qty', qty);

        e.target.parentElement.parentElement.style.visibility='collapse';
        e.target.parentElement.parentElement.previousElementSibling.style.visibility='visible';
        
    }
}

function getValues(product, comment, qty){

}

