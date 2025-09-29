let type = document.querySelector('#type');
let fromTo = document.querySelector('#tofrom');
let details = document.querySelector('#details');
let amount = document.querySelector('#amount');
let addButton = document.querySelector('button');
// item list
let itemList = document.querySelector('.item-list');
addButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(type.value, fromTo.value, details.value, amount.value);
    appendListItem(type.value, fromTo.value, details.value, amount.value);
});
const appendListItem = (type, fromTo, details, amount) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
    <h4>${type}</h4>
    <p>${fromTo}</p>
    <p>${details}</p>
    <p>${amount}</p>
  `;
    itemList.appendChild(listItem);
};
export {};
//# sourceMappingURL=index.js.map