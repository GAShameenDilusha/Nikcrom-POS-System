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


$('#login-view-loginbutton').on('click', () => {
    $('#login-view-section').css({display: 'none'});
    $('#home-view-section').css({display: 'block'});
    $('#customer-view-section').css({display: 'none'});
    $('#item-view-section').css({display: 'none'});
    $('#orders-view-section').css({display: 'none'});
});

$('#login-view-registerbutton').on('click', () => {
    $('#login-view-section').css({display: 'none'});
    $('#home-view-section').css({display: 'block'});
    $('#customer-view-section').css({display: 'none'});
    $('#item-view-section').css({display: 'none'});
    $('#orders-view-section').css({display: 'none'});
});

$('#home-view-registerbutton').on('click', () => {
    $('#login-view-section').css({display: 'none'});
    $('#home-view-section').css({display: 'block'});
    $('#customer-view-section').css({display: 'none'});
    $('#item-view-section').css({display: 'none'});
    $('#orders-view-section').css({display: 'none'});
});


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


//////////////////////////////////////////////


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

// Function to search for customers
function searchCustomers() {
    const searchInput = $('.form-control').val().toLowerCase();
    const filteredCustomers = customers.filter(customer =>
        customer.id.toLowerCase().includes(searchInput) ||
        customer.name.toLowerCase().includes(searchInput)
    );

    renderCustomerTables(filteredCustomers);
}

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








/*/////////////////////////////////////////////*/

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
}

// Function to search for items
function searchItems() {
    const searchInput = $('.form-control').val().toLowerCase();
    const filteredItems = items.filter(item =>
        item.id.toLowerCase().includes(searchInput) ||
        item.name.toLowerCase().includes(searchInput)
    );

    renderItemTables(filteredItems);
}

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
















/*/////////////////////////////////////////////////////*/
    let orders = []; // Array to store order data

    // Function to add an item to the order
    function addItemToOrder() {
    const itemCode = $('#itemCode').val();
    const itemName = $('#itemName4').val();
    const price = parseFloat($('#price').val());
    const orderQuantity = parseInt($('#orderQuantity').val());
    const total = price * orderQuantity;

    const newItem = {
    itemCode,
    itemName,
    price,
    orderQuantity,
    total
};

    orders.push(newItem);
    renderOrderTable();
    calculateTotals();
}

    // Function to render the order table
    function renderOrderTable() {
    const $tableBody = $('#ordersTable tbody');
    $tableBody.empty();

    $.each(orders, (index, order) => {
    const $row = $('<tr>');
    $row.append($('<td>').text(order.itemCode));
    $row.append($('<td>').text(order.itemName));
    $row.append($('<td>').text(order.price.toFixed(2)));
    $row.append($('<td>').text(order.orderQuantity));
    $row.append($('<td>').text(order.total.toFixed(2)));

    $tableBody.append($row);
});
}

    // Function to calculate totals
    function calculateTotals() {
    let subTotal = 0;
    let total = 0;

    $.each(orders, (index, order) => {
    subTotal += order.total;
});

    const discount = parseFloat($('.input-group input[type="number"]').val()) / 100;
    total = subTotal - (subTotal * discount);

    $('.Th3').text(`Total : Rs.${total.toFixed(2)}`);
    $('.Sh4').text(`SubTotal : Rs.${subTotal.toFixed(2)}`);
}

    // Event listeners
    $('.add-button').on('click', addItemToOrder);
    $('.input-group input[type="number"]').on('input', calculateTotals);



