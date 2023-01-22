var selectedRow=null;
function onFormSubmit(_e){
    event.preventDefault();
    var formData=readFormData();
    if(selectedRow===null){
        insertNewRecord(formData)
    }
    else{
       updateRecord(formData)
    }
    resetForm();
}

//retrive the data
function readFormData(){
    var formData={};
    formData["productCode"]=document.getElementById("productCode").value;
    formData["productName"]=document.getElementById("productName").value;
    formData["qty"]=document.getElementById("qty").value;
    formData["perPrice"]=document.getElementById("perPrice").value;
    return formData;
}

// insert new record to tbody
 function insertNewRecord(data){
    var table=document.getElementById("storeList").getElementsByTagName('tbody')[0];
    var newRow=table.insertRow(table.length);
    var cell1=newRow.insertCell(0);
        cell1.innerHTML=data.productCode;
    var cell2=newRow.insertCell(1);
        cell2.innerHTML=data.productName;
    var cell3=newRow.insertCell(2);
        cell3.innerHTML=data.qty;
    var cell4=newRow.insertCell(3);
        cell4.innerHTML=data.perPrice;
    var cell5=newRow.insertCell(4);
        cell5.innerHTML=`<button onclick="onEdit(this)">Edit</button> 
        <button onclick="onDelete(this)">Delete</button>`;

 }

  
// Edit the Data
function onEdit(td){
    console.log(td);
   selectedRow=td.parentElement.parentElement;
   document.getElementById("productCode").value=selectedRow.cells[0].innerHTML;
   document.getElementById("productName").value=selectedRow.cells[1].innerHTML;
   document.getElementById("qty").value=selectedRow.cells[2].innerHTML;
   document.getElementById("perPrice").value=selectedRow.cells[3].innerHTML;

}

function updateRecord(formData){
    selectedRow.cells[0].innerHTML=formData.productCode;
    selectedRow.cells[1].innerHTML=formData.productName;
    selectedRow.cells[2].innerHTML=formData.qty;
    selectedRow.cells[3].innerHTML=formData.perPrice;
}

// Delete the data
function onDelete(td){
   if(confirm('Do you want to delete this record')){

    row=td.parentElement.parentElement;
    document.getElementById("storeList").deleteRow(row.rowIndex);
   }
   resetForm();
}

// Reset the data
function resetForm(){
    document.getElementById("productCode").value="";
    document.getElementById("productName").value="";
    document.getElementById("qty").value="";
    document.getElementById("perPrice").value="";

}

























