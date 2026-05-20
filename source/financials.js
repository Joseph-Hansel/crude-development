// let newestIndex = 0;

let balance = 0



let records = JSON.parse(localStorage.getItem("records")) || [];



function saveData() {
  localStorage.setItem("records", JSON.stringify(records));
}



function renderTables() {
    clearDynamicRows(eTable, blaBlaBla);
    clearDynamicRows(iTable, blaBlaBla2);

    balance = 0;

    records.forEach((item, index) => {
        if (item.type === "income") {
            balance += item.amount;
            addRow(iTable, item, balance, index);
        } else {
            balance -= item.amount;
            addRow(eTable, item, balance, index);
        }
    });

  eTableBalance.textContent = balance;
  iTableBalance.textContent = balance;
}



function addRow(table, item, balance, index) {
  const row = document.createElement("tr");

  const amountCell = document.createElement("td");
  amountCell.textContent = item.amount;

  const btn = document.createElement("button");
  btn.textContent = "-";
  btn.onclick = () => {
    removeFromDatabase(records[index].id);
    removeRecord(index);
};

  amountCell.appendChild(btn);

  const explCell = document.createElement("td");
  explCell.textContent = item.explanation;

  const balCell = document.createElement("td");
  balCell.textContent = balance;

  row.append(amountCell, explCell, balCell);
    if(table === eTable){
        table.insertBefore(row, blaBlaBla)
    }else if(table === iTable){
        table.insertBefore(row, blaBlaBla2)
    };
}



function clearDynamicRows(table, anchor) {
  while (table.firstElementChild && table.firstElementChild !== anchor) {
    table.removeChild(table.firstChild);
  }
}



function removeRecord(index) {
  records.splice(index, 1);
  saveData();
  renderTables();
}



let eTable = document.getElementById("e_table")
const eExplnInput = document.getElementById("e_expln_input")
const expndInput = document.getElementById("expnd_input")
const blaBlaBla = document.getElementById("blablabla")
let eTableBalance = document.getElementById("e_table_balance")
let iTableBalance = document.getElementById("i_table_balance")
// eTableBalance.textContent = parseFloat(balance)
// iTableBalance.textContent = parseFloat(balance)



function addToExpenditure(){
    if(eExplnInput.value && expndInput.value){

        records.push({
            type: "expense",
            amount: parseFloat(expndInput.value),
            explanation: eExplnInput.value
        });

        saveData();
        renderTables();
        expndInput.value = "";
        eExplnInput.value = "";

        addToDatabase();

    }else{
        alert("Please fill in both the value and explanation")
    }
}



let iTable = document.getElementById("i_table")
const iExplnInput = document.getElementById("i_expln_input")
const incInput = document.getElementById("inc_input")
const blaBlaBla2 = document.getElementById("blablabla2")



function addToIncome(){
    if(iExplnInput.value && incInput.value){

        records.push({
            type: "income",
            amount: parseFloat(incInput.value),
            explanation: iExplnInput.value
        });

        saveData();
        renderTables();
        incInput.value = "";
        iExplnInput.value = "";

        addToDatabase();

    }else{
        alert("Please fill in both the value and explanation")
    }
}



renderTables();
