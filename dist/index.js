let type = document.querySelector('#type');
let fromTo = document.querySelector('#tofrom');
let details = document.querySelector('#details');
let amount = document.querySelector('#amount');
let addButton = document.querySelector('button');
// item list
let itemList = document.querySelector('.item-list');
addButton.addEventListener("click", (e) => {
    e.preventDefault();
    let newRecord = {
        type: type.value,
        fromTo: fromTo.value,
        details: details.value,
        amount: amount.value
    };
    appendListItem(newRecord);
});
const appendListItem = (newRecord) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
    <h4>${newRecord.type}</h4>
    <p>${newRecord.fromTo}</p>
    <p>${newRecord.details}</p>
    <p>${newRecord.amount}</p>
  `;
    itemList.appendChild(listItem);
};
export {};
//# sourceMappingURL=index.js.map