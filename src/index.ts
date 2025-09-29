let type = document.querySelector('#type') as HTMLSelectElement;
let fromTo = document.querySelector('#tofrom') as HTMLInputElement;
let details = document.querySelector('#details') as HTMLInputElement;
let amount = document.querySelector('#amount') as HTMLInputElement;
let addButton = document.querySelector('button') as HTMLButtonElement;


// item list
let itemList = document.querySelector('.item-list') as HTMLUListElement;

addButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(type.value, fromTo.value, details.value, amount.value);

  appendListItem(type.value, fromTo.value, details.value, amount.value);
});


const appendListItem = (type: string, fromTo: string, details: string, amount: string) => {
  const listItem = document.createElement('li');
  listItem.innerHTML = `
    <h4>${type}</h4>
    <p>${fromTo}</p>
    <p>${details}</p>
    <p>${amount}</p>
  `;
  itemList.appendChild(listItem);
};