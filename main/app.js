document.addEventListener('DOMContentLoaded', function() {
  // Set the default value for the date input to the current date
  document.getElementById('expiryDate').value = getDate();
});


document.getElementById('addItemForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get the input values
  var itemName = document.getElementById('itemName').value;
  var itemQuantity = document.getElementById('itemQuantity').value;
  var expiryDate = document.getElementById('expiryDate').value;

  //log it
  console.log("worked")

  // Pass the values to the addItem function
  addItem('p', `Name: ${itemName}, Quantity: ${itemQuantity}, Expiry Date: ${expiryDate}`, itemName);
});

function addItem(type, content, name) {
  var item = document.createElement(type);
  item.id = name;
  item.innerHTML = content;
  document.querySelector('.show').appendChild(item); // Append the new item to the dashboard
}

function getDate() {
  var date = new Date();
  var day = String(date.getDate()).padStart(2, '0');
  var month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
  var year = date.getFullYear();
  return `${year}-${month}-${day}`;
}
