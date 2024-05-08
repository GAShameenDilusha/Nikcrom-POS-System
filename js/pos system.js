var students = [];
var recordIndex;

$('#login-view-section').css({display: 'block'});
$('#home-view-section').css({display: 'none'});
$('#customer-view-section').css({display: 'none'});
$('#item-view-section').css({display: 'none'});
$('#orders-view-section').css({display: 'none'});


// home nav management
$('#nav-home').on('click', () => {
    $('#login-view-section').css({display: 'none'});
    $('#home-view-section').css({display: 'block'});
    $('#customer-view-section').css({display: 'none'});
    $('#item-view-section').css({display: 'none'});
    $('#orders-view-section').css({display: 'none'});
});

// customer nav management
$('#nav-customer').on('click', () => {
    $('#login-view-section').css({display: 'none'});
    $('#home-view-section').css({display: 'none'});
    $('#customer-view-section').css({display: 'block'});
    $('#item-view-section').css({display: 'none'});
    $('#orders-view-section').css({display: 'none'});
});


// item nav management
$('#nav-item').on('click', () => {
    $('#login-view-section').css({display: 'none'});
    $('#home-view-section').css({display: 'none'});
    $('#customer-view-section').css({display: 'none'});
    $('#item-view-section').css({display: 'block'});
    $('#orders-view-section').css({display: 'none'});
});


// orders nav management
$('#nav-orders').on('click', () => {
    $('#login-view-section').css({display: 'none'});
    $('#home-view-section').css({display: 'none'});
    $('#customer-view-section').css({display: 'none'});
    $('#item-view-section').css({display: 'none'});
    $('#orders-view-section').css({display: 'block'});
});


$('#nav-logout').on('click', () => {
    $('#login-view-section').css({display: 'block'});
    $('#home-view-section').css({display: 'none'});
    $('#customer-view-section').css({display: 'none'});
    $('#item-view-section').css({display: 'none'});
    $('#orders-view-section').css({display: 'none'});
});


$('#login-view-login_button ,#register').on('click', () => {
    $('#login-view-section').css({display: 'none'});
    $('#home-view-section').css({display: 'block'});
    $('#customer-view-section').css({display: 'none'});
    $('#item-view-section').css({display: 'none'});
    $('#orders-view-section').css({display: 'none'});
});

/*$('#register').on('click', () => {
    $('#login-view-section').css({display: 'none'});
    $('#home-view-section').css({display: 'block'});
    $('#customer-view-section').css({display: 'none'});
    $('#item-view-section').css({display: 'none'});
    $('#orders-view-section').css({display: 'none'});
});*/

/*
$('#home-view-registerbutton').on('click', () => {
    $('#login-view-section').css({display: 'none'});
    $('#home-view-section').css({display: 'block'});
    $('#customer-view-section').css({display: 'none'});
    $('#item-view-section').css({display: 'none'});
    $('#orders-view-section').css({display: 'none'});
});
*/


$('#customer_btn').on('click', () => {
    $('#login-view-section').css({display: 'none'});
    $('#home-view-section').css({display: 'none'});
    $('#customer-view-section').css({display: 'block'});
    $('#item-view-section').css({display: 'none'});
    $('#orders-view-section').css({display: 'none'});
});


$('#item_btn').on('click', () => {
    $('#login-view-section').css({display: 'none'});
    $('#home-view-section').css({display: 'none'});
    $('#customer-view-section').css({display: 'none'});
    $('#item-view-section').css({display: 'block'});
    $('#orders-view-section').css({display: 'none'});
});


$('#order_btn').on('click', () => {
    $('#login-view-section').css({display: 'none'});
    $('#home-view-section').css({display: 'none'});
    $('#customer-view-section').css({display: 'none'});
    $('#item-view-section').css({display: 'none'});
    $('#orders-view-section').css({display: 'block'});
});


//////////////////////////////////////////////Customer

let customers = []; // Array to store customer data
let selectedCustomerIndex = -1; // Index of the selected customer for update/delete operations

// Function to save a new customer
function saveCustomer() {
    const customerId = $('#customerId').val();
    const customerName = $('#customerName').val();
    const customerAddress = $('#customerAddress').val();
    const customerSalary = $('#customerSalary').val();

    const newCustomer = {
        id: customerId,
        name: customerName,
        address: customerAddress,
        salary: customerSalary
    };

    customers.push(newCustomer);
    clearCustomerForm();
    renderCustomerTables();
}

// Function to update an existing customer
function updateCustomer() {
    const customerId = $('#customerId').val();
    const customerName = $('#customerName').val();
    const customerAddress = $('#customerAddress').val();
    const customerSalary = $('#customerSalary').val();

    customers[selectedCustomerIndex] = {
        id: customerId,
        name: customerName,
        address: customerAddress,
        salary: customerSalary
    };

    clearCustomerForm();
    renderCustomerTables();
}

// Function to delete a customer
function deleteCustomer() {
    customers.splice(selectedCustomerIndex, 1);
    clearCustomerForm();
    renderCustomerTables();
}

// Function to clear the customer form
function clearCustomerForm() {
    $('#customerId').val('');
    $('#customerName').val('');
    $('#customerAddress').val('');
    $('#customerSalary').val('');
    selectedCustomerIndex = -1;
}

// Function to render both customer tables
function renderCustomerTables() {
    const $customerTableBody = $('#customerTable tbody');
    const $viewAllCustomersTableBody = $('#viewAllCustomersTableBody');

    $customerTableBody.empty();
    $viewAllCustomersTableBody.empty();

    $.each(customers, (index, customer) => {
        const $row = $('<tr>');
        $row.append($('<td>').text(customer.id));
        $row.append($('<td>').text(customer.name));
        $row.append($('<td>').text(customer.address));
        $row.append($('<td>').text(customer.salary));

        $row.on('click', () => {
            selectedCustomerIndex = index;
            populateCustomerForm(customer);
        });

        $customerTableBody.append($row.clone(true));
        $viewAllCustomersTableBody.append($row);
    });
}

// Function to populate the customer form with data
function populateCustomerForm(customer) {
    $('#customerId').val(customer.id);
    $('#customerName').val(customer.name);
    $('#customerAddress').val(customer.address);
    $('#customerSalary').val(customer.salary);
}

// Function to search for customers           (start)
function searchCustomers() {
    const searchId = $('#customerId').val().toLowerCase();
    const searchName = $('#customerName').val().toLowerCase();
    const matchingCustomer = customers.find(customer =>
        customer.id.toLowerCase() === searchId &&
        customer.name.toLowerCase().includes(searchName)
    );

    if (matchingCustomer) {
        selectedCustomerIndex = customers.indexOf(matchingCustomer);
        populateCustomerForm(matchingCustomer, '#newCustomerModal');
        $('#newCustomerModal').modal('show'); // Open the "New Customer" modal
    } else {
        clearCustomerForm('#newCustomerModal');
        $('#newCustomerModal').modal('hide'); // Hide the "New Customer" modal if no matching customer is found
    }
}

function populateCustomerForm(customer, modalId) {
    const $modal = $(modalId);

    $modal.find('#customerId').val(customer.id);
    $modal.find('#customerName').val(customer.name);
    $modal.find('#customerAddress').val(customer.address);
    $modal.find('#customerSalary').val(customer.salary);
}

function clearCustomerForm(modalId) {
    const $modal = $(modalId);

    $modal.find('#customerId').val('');
    $modal.find('#customerName').val('');
    $modal.find('#customerAddress').val('');
    $modal.find('#customerSalary').val('');
    selectedCustomerIndex = -1;
}                                                           /*end*/


// Function to render customer tables with filtered data
function renderCustomerTables(filteredData = customers) {
    const $customerTableBody = $('#customerTable tbody');
    const $viewAllCustomersTableBody = $('#viewAllCustomersTableBody');

    $customerTableBody.empty();
    $viewAllCustomersTableBody.empty();

    $.each(filteredData, (index, customer) => {
        const $row = $('<tr>');
        $row.append($('<td>').text(customer.id));
        $row.append($('<td>').text(customer.name));
        $row.append($('<td>').text(customer.address));
        $row.append($('<td>').text(customer.salary));

        $row.on('click', () => {
            selectedCustomerIndex = index;
            populateCustomerForm(customer);
        });

        $customerTableBody.append($row.clone(true));
        $viewAllCustomersTableBody.append($row);
    });
}

// Event listeners
$('#newCustomerModal .btn-success').on('click', saveCustomer);
$('#newCustomerModal .btn-primary').on('click', updateCustomer);
$('#newCustomerModal .btn-danger').on('click', deleteCustomer);
$('#newCustomerModal .btn-warning').on('click', clearCustomerForm);
$('#searchBtn').on('click', searchCustomers);

// Render both customer tables on page load
$(document).ready(function () {
    renderCustomerTables();
});

// Render both customer tables when the "View All Customers" modal is shown
$('#viewAllCustomersModal').on('shown.bs.modal', function () {
    renderCustomerTables();
});


/////////////////////////////////////////////item

let items = []; // Array to store item data
let selectedItemIndex = -1; // Index of the selected item for update/delete operations

// Function to save a new item
function saveItem() {
    const itemId = $('#itemId').val();
    const itemName = $('#itemName1').val();
    const itemPrice = $('#itemAddress').val();
    const itemQuantity = $('#itemSalary').val();

    const newItem = {
        id: itemId,
        name: itemName,
        price: itemPrice,
        quantity: itemQuantity
    };

    items.push(newItem);
    clearItemForm();
    renderItemTables();
}

// Function to update an existing item
function updateItem() {
    const itemId = $('#itemId').val();
    const itemName = $('#itemName1').val();
    const itemPrice = $('#itemAddress').val();
    const itemQuantity = $('#itemSalary').val();

    items[selectedItemIndex] = {
        id: itemId,
        name: itemName,
        price: itemPrice,
        quantity: itemQuantity
    };

    clearItemForm();
    renderItemTables();
}

// Function to delete an item
function deleteItem() {
    items.splice(selectedItemIndex, 1);
    clearItemForm();
    renderItemTables();
}

// Function to clear the item form
function clearItemForm() {
    $('#itemId').val('');
    $('#itemName1').val('');
    $('#itemAddress').val('');
    $('#itemSalary').val('');
    selectedItemIndex = -1;
}


// Function to render the item table
function renderItemTables() {
    const $itemTableBody = $('#itemTable tbody');
    const $viewAllItemsTableBody = $('#viewAllItemsTableBody');

    $itemTableBody.empty();
    $viewAllItemsTableBody.empty();

    $.each(items, (index, item) => {
        const $row = $('<tr>');
        $row.append($('<td>').text(item.id));
        $row.append($('<td>').text(item.name));
        $row.append($('<td>').text(item.price));
        $row.append($('<td>').text(item.quantity));

        $row.on('click', () => {
            selectedItemIndex = index;
            populateItemForm(item);
        });

        $itemTableBody.append($row.clone(true));
        $viewAllItemsTableBody.append($row);
    });
}


// Function to populate the item form with data
function populateItemForm(item) {
    $('#itemId').val(item.id);
    $('#itemName1').val(item.name);
    $('#itemAddress').val(item.price);
    $('#itemSalary').val(item.quantity);
    $('#searchBtn3').on('click', searchItems());
}

// Function to search for items
/*
function searchItems() {
    const searchInput = $('.form-control').val().toLowerCase();
    const matchingItem = items.find(item =>
        item.id.toLowerCase() === searchInput ||
        item.name.toLowerCase().includes(searchInput)
    );

    if (matchingItem) {
        selectedItemIndex = items.indexOf(matchingItem);
        populateItemForm(matchingItem, '#newItemModal');
        $('#newItemModal').modal('show'); // Open the "New Item" modal
    } else {
        clearItemForm('#newItemModal');
        $('#newItemModal').modal('hide'); // Hide the "New Item" modal if no matching item is found
    }
}


function populateItemForm(item, modalId) {
    const $modal = $(modalId);

    $modal.find('#itemId').val(item.id);
    $modal.find('#itemName1').val(item.name);
    $modal.find('#itemAddress').val(item.price);
    $modal.find('#itemSalary').val(item.quantity);
    $('#searchBtn3').on('click', searchItems());
}


function clearItemForm(modalId) {
    const $modal = $(modalId);

    $modal.find('#itemId').val('');
    $modal.find('#itemName1').val('');
    $modal.find('#itemAddress').val('');
    $modal.find('#itemSalary').val('');
    selectedItemIndex = -1;
}
*/


// Function to render both item tables
function renderItemTables(filteredData = items) {
    const $itemTableBody = $('#itemTable tbody');
    const $viewAllItemsTableBody = $('#viewAllItemsTableBody');

    $itemTableBody.empty();
    $viewAllItemsTableBody.empty();

    $.each(filteredData, (index, item) => {
        const $row = $('<tr>');
        $row.append($('<td>').text(item.id));
        $row.append($('<td>').text(item.name));
        $row.append($('<td>').text(item.price));
        $row.append($('<td>').text(item.quantity));

        $row.on('click', () => {
            selectedItemIndex = index;
            populateItemForm(item);
        });

        $itemTableBody.append($row.clone(true));
        $viewAllItemsTableBody.append($row);
    });
}

// Event listeners
$('#newItemModal .btn-success').on('click', saveItem);
$('#newItemModal .btn-primary').on('click', updateItem);
$('#newItemModal .btn-danger').on('click', deleteItem);
$('#newItemModal .btn-warning').on('click', clearItemForm);
$('#searchItemBtn').on('click', searchItems);

// Render both item tables on page load
$(document).ready(function () {
    renderItemTables();
});

// Render both item tables when the "View All Items" modal is shown
$('#viewAllItemsModal').on('shown.bs.modal', function () {
    renderItemTables();
});



//////////////////////////////////////////////////////////////////////////////////////////////////// Orders
/*////////Auto Generate Order id///////////*/
// Use jQuery's document ready function
$(document).ready(function() {
    // Generate a unique order ID
    var orderId = generateOrderId();
    // Set the generated order ID to the input field
    $('#orderId').val(orderId);
    // Show the generated order ID in the span
    $('#orderIdDisplay').text(orderId);
});

// Function to generate an order ID
function generateOrderId() {
    // Generate a random 6-digit number
    var randomNum = Math.floor(Math.random() * 900000) + 100000;
    // Get the current date and time in milliseconds
    var timestamp = new Date().getTime();
    // Combine the random number with the timestamp to create a unique order ID
    var orderId = 'ORD' + randomNum + timestamp;
    return orderId;
}







/*/////Customer drop down/////////*/
// Function to populate the customer dropdown in the orders section
function populateCustomerDropdown() {
    const $dropdown = $('#customerDropdown');
    $dropdown.empty();

    customers.forEach(customer => {
        $dropdown.append($('<option>').text(customer.id).val(customer.id));
    });

    // Trigger change event once dropdown is populated
    $dropdown.trigger('change');
}

// Call the function to populate the dropdown on document ready
$(document).ready(function () {
    populateCustomerDropdown();
});


// Event listener for customer dropdown change
$('#customerDropdown').on('change', function () {
    const selectedCustomerId = $(this).val();
    const selectedCustomer = customers.find(customer => customer.id === selectedCustomerId);

    // Populate customer details in the orders section
    if (selectedCustomer) {
        $('#name').val(selectedCustomer.name);
        $('#address').val(selectedCustomer.address);
        $('#contact').val(selectedCustomer.contact);
    } else {
        // Clear customer details if no customer is selected
        $('#name').val('');
        $('#address').val('');
        $('#contact').val('');
    }
});









/*////////Item drop down///////////////*/
// Function to populate the item dropdown in the orders section
function populateItemDropdown() {
    const $dropdown = $('#itemDropdown');
    $dropdown.empty();

    items.forEach(item => {
        $dropdown.append($('<option>').text(item.id).val(item.id));
    });

    // Trigger change event once dropdown is populated
    $dropdown.trigger('change');
}

// Call the function to populate the dropdown on document ready
$(document).ready(function () {
    populateItemDropdown();
});


// Event listener for item dropdown change
$('#itemDropdown').on('change', function () {
    const selectedItemId = $(this).val();
    const selectedItem = items.find(item => item.id === selectedItemId);

    // Populate item details in the orders section
    if (selectedItem) {
        $('#itemName').val(selectedItem.name);
        $('#price').val(selectedItem.price);
        $('#qtyOnHand').val(selectedItem.qtyOnHand);
    } else {
        // Clear item details if no item is selected
        $('#itemName').val('');
        $('#price').val('');
        $('#qtyOnHand').val('');
    }
});







/*///////////when i click the add item button after this item put the table//////////*/
// Function to add the selected item to the table in the orders section
function addItemToTable() {
    const itemCode = $('#itemDropdown').val();
    const itemName = $('#itemName').val();
    const price = $('#price').val();
    const quantity = $('#orderQuantity').val();
    const total = price * quantity;

    // Create a new row for the table
    const $row = $('<tr>');
    $row.append($('<td>').text(itemCode));
    $row.append($('<td>').text(itemName));
    $row.append($('<td>').text(price));
    $row.append($('<td>').text(quantity));
    $row.append($('<td>').text(total));

    // Append the row to the table body
    $('#ordersTable tbody').append($row);
}

// Event listener for the "Add Item" button
$('#addItemButton').on('click', function() {
    addItemToTable();
    calculateTotal();
    calculateSubtotal();
});


// Clear input fields after adding item
$('#itemName').val('');
$('#price').val('');
$('#qtyOnHand').val('');
$('#orderQuantity').val('');








/*////////Total logics/////////*/
function calculateTotal() {
    let total = 0;
    $('#ordersTable tbody tr').each(function() {
        const price = parseFloat($(this).find('td:nth-child(3)').text());
        const quantity = parseInt($(this).find('td:nth-child(4)').text());
        total += price * quantity;
    });
    $('#itemCode-T').val(total.toFixed(2));
}

function calculateSubtotal() {
    let subtotal = 0;
    $('#ordersTable tbody tr').each(function() {
        const price = parseFloat($(this).find('td:nth-child(3)').text());
        const quantity = parseInt($(this).find('td:nth-child(4)').text());
        subtotal += price * quantity;
    });
    $('#itemCode-S').val(subtotal.toFixed(2));
}


function calculateBalance() {
    const total = parseFloat($('#itemCode-T').val());
    const cash = parseFloat($('.Cash-textfield').val());
    const discount = parseFloat($('.Discount-Textfield').val());
    const balance = total - cash - (total * (discount / 100));
    $('.Balance-Textfield').val(balance.toFixed(2));
}


$('.purchase').on('click', function() {
    calculateBalance();
    // You can perform additional actions here, such as saving the order
});


$('.Cash-textfield, .Discount-Textfield').on('input', calculateBalance);
