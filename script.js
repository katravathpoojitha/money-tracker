let expense=[]
let totalAmount=0;
const CategorySelect=document.getElementById('category_select')
const amountInput=document.getElementById('amount_input')
const InfoInput=document.getElementById("InfoInput")
const DateInput=document.getElementById('date_input')
const AddBtn=document.getElementById('add_btn')
const expenseTableBody=document.getElementById('expense-table-body')
const totalAmountCell=document.getElementById('total-amount')

// script.js

document.addEventListener('DOMContentLoaded', function () {
    const addBtn = document.getElementById('add_btn');
    const expenseTableBody = document.getElementById('expense-table-body');
    const totalAmountCell = document.getElementById('total-amount');

    addBtn.addEventListener('click', function (event) {
        event.preventDefault();

        const categorySelect = document.getElementById('category_select');
        const amountInput = document.getElementById('amount_input');
        const infoInput = document.getElementById('info');
        const dateInput = document.getElementById('date_input');

        const category = categorySelect.value;
        const amount = amountInput.value;
        const info = infoInput.value;
        const date = dateInput.value;

        console.log("Category:", category);
        console.log("Amount:", amount);
        console.log("Info:", info);
        console.log("Date:", date);

        if (!category || !amount || !info || !date) {
            alert('Please fill in all fields.');
            return;
        }

        const newRow = expenseTableBody.insertRow();
        const categoryCell = newRow.insertCell();
        const amountCell = newRow.insertCell();
        const infoCell = newRow.insertCell();
        const dateCell = newRow.insertCell();
        const deleteCell = newRow.insertCell();

        categoryCell.textContent = category;
        amountCell.textContent = amount;
        infoCell.textContent = info;
        dateCell.textContent = date;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', function () {
            const row = this.parentNode.parentNode;
            const amountToDelete = parseFloat(row.cells[1].textContent);
            const categoryToDelete = row.cells[0].textContent;

            if (categoryToDelete === 'Income') {
                totalAmountCell.textContent = parseFloat(totalAmountCell.textContent) - amountToDelete;
            } else {
                totalAmountCell.textContent = parseFloat(totalAmountCell.textContent) + amountToDelete;
            }

            row.parentNode.removeChild(row);
        });

        deleteCell.appendChild(deleteBtn);

        // Update total amount
        if (category === 'Income') {
            totalAmountCell.textContent = parseFloat(totalAmountCell.textContent) + parseFloat(amount);
        } else {
            totalAmountCell.textContent = parseFloat(totalAmountCell.textContent) - parseFloat(amount);
        }

        // Reset form
        categorySelect.value = 'Expense';
        amountInput.value = '';
        infoInput.value = '';
        dateInput.value = '';

        // Debugging: log the HTML content of the table body
        console.log(expenseTableBody.innerHTML);
    });
});
