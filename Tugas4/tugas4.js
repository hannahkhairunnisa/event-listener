const inputField = document.getElementById('inputField');
const addItem = document.getElementById('addItem');
const listItem = document.getElementById('listItem');

addItem.addEventListener('click', function () {
    const buatElemen = document.createElement('li');
    buatElemen.textContent = inputField.value;
    listItem.innerHTML += `<li>${inputField.value}</li>`
    inputField.value = '';
});