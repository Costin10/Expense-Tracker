function removeRow(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function addRow() {
    var dateInput = document.getElementById("dateInput");
    var expenseInput = document.getElementById("expenseInput");
    var amountInput = document.getElementById("amountInput");
    
    if (dateInput.value === "" || expenseInput.value === "" || amountInput.value === "") {
        return; // Exit the function if any input field is empty
    }
    
    var table = document.querySelector("table tbody");
    var newRow = document.createElement("tr");
    
    var dateCell = document.createElement("td");
    dateCell.textContent = dateInput.value;
    
    var expenseCell = document.createElement("td");
    expenseCell.textContent = expenseInput.value;
    
    var amountCell = document.createElement("td");
    amountCell.textContent = "$" + amountInput.value;
    
    var actionCell = document.createElement("td");
    var removeButton = document.createElement("button");
    removeButton.className = "remove-button";
    removeButton.textContent = "Remove";
    removeButton.onclick = function() {
        removeRow(this);
    };
    actionCell.appendChild(removeButton);
    
    newRow.appendChild(dateCell);
    newRow.appendChild(expenseCell);
    newRow.appendChild(amountCell);
    newRow.appendChild(actionCell);
    
    table.appendChild(newRow);
    
    dateInput.value = "";
    expenseInput.value = "";
    amountInput.value = "";
}