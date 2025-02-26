document.addEventListener('DOMContentLoaded', function() {
  // Set the default value for the date input to the current date
  document.getElementById('expiryDate').value = getDate();
});

var counter = 0;

document.getElementById('addItemForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the input values
  let itemName = document.getElementById('itemName').value;
  let itemQuantity = document.getElementById('itemQuantity').value;
  let expiryDate = document.getElementById('expiryDate').value;
  console.log(expiryDate)

  if (daysLeft(expiryDate) < 0) {
    alert('The expiry date cannot be in the past!');
    return;
  }
  // Pass the values to the addItem function
  for (itemQuantity > 0; itemQuantity--;) {
  addItem('tr', '', 'row' + counter, '.table'); // Add a new row to the dashboard
  addItem('td', itemName, 'itemName' + counter, '#row' + counter); // Add the item name to the new row // Add the item quantity to the new row
  addItem('td', expiryDate, 'expiryDate' + counter, '#row' + counter); // Add the expiry date to the new row
  addItem('td', daysLeft(expiryDate), 'daysLeft' + counter, '#row' + counter); // Add the days left to the new row
  addItem('td', '<button onclick="document.getElementById(\'row' + counter + '\').remove();"><span class="material-symbols-outlined">delete</span></button>', 'removeButton' + counter, '#row' + counter); // Add the remove button to the new row
  counter++;//increment the counter
  }
  saveRow(itemName, itemQuantity, expiryDate);
});

function addItem(type, content, name, rowToInsert) {
  let item = document.createElement(type);
  item.id = name;
  item.innerHTML = content;
  
  if (rowToInsert == null || rowToInsert == '') {
    document.querySelector('.table').appendChild(item); // Append the new item to the dashboard
  }
  else {
    document.querySelector(rowToInsert).insertBefore(item, null); // Append the new item to the row
  }
  let showDiv = document.querySelector('.show');
  if (showDiv.style.display == '' || showDiv.style.display == 'none') {
    showDiv.style.display = 'flex';
  }

  
}

function getDate() {
  var date = new Date();
  let day = String(date.getDate()).padStart(2, '0');
  let month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  let year = date.getFullYear();
  console.log(date);
  return `${year}-${month}-${day}`;

}

function daysLeft(date) {
  let today = new Date();
  let expiryDate = new Date(date);
  let timeDiff = expiryDate - today;
  let daysLeft = Math.ceil(timeDiff / (1000 * 3600 * 24));
  console.log(expiryDate)
  return daysLeft;}

function saveRow(itemName, itemQuantity, expiryDate) {
  let row = {
    itemName: itemName,
    itemQuantity: itemQuantity,
    expiryDate: expiryDate
  };
  localStorage.setItem(`row${counter}`, JSON.stringify(row));
  return JSON.parse(localStorage.getItem(`row${counter}`));

}

function signOut() {
  localStorage.setItem('signedIn', 'false');
  location.href = 'index.html';
}