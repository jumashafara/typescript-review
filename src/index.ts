import type { FinanceRecord } from './interfaces';

let type = document.querySelector('#type') as HTMLSelectElement;
let fromTo = document.querySelector('#tofrom') as HTMLInputElement;
let details = document.querySelector('#details') as HTMLInputElement;
let amount = document.querySelector('#amount') as HTMLInputElement;
let addButton = document.querySelector('button') as HTMLButtonElement;


// item list
let itemList = document.querySelector('.item-list') as HTMLUListElement;

addButton.addEventListener("click", (e) => {
  e.preventDefault();
  let newRecord: FinanceRecord = {
    type: type.value,
    fromTo: fromTo.value,
    details: details.value,
    amount: amount.value
  }

  appendListItem(newRecord);
});


const appendListItem = (newRecord: FinanceRecord) => {
  const listItem = document.createElement('li');
  listItem.innerHTML = `
    <h4>${newRecord.type}</h4>
    <p>${newRecord.fromTo}</p>
    <p>${newRecord.details}</p>
    <p>${newRecord.amount}</p>
  `;
  itemList.appendChild(listItem);
};