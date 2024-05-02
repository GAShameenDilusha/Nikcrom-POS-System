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







/////////////////////////////////////////////////////Orders

// Array to store order data
let orders = [];

// Populate customer dropdown
const $customerDropdown = $('#customer');
$customerDropdown.empty();
$customerDropdown.append($('<option>').val('').text('Select a Customer'));
customers.forEach((customer, index) => {
    $customerDropdown.append($('<option>').val(index).text(`${customer.id} - ${customer.name}`));
});

// Populate item dropdown
const $itemDropdown = $('#item');
$itemDropdown.empty();
$itemDropdown.append($('<option>').val('').text('Select an Item'));
items.forEach((item, index) => {
    $itemDropdown.append($('<option>').val(index).text(`${item.id} - ${item.name}`));
});

// Function to add an item to the order
function addItemToOrder() {
    const customerIndex = $('#customer').val();
    const selectedCustomer = customers[customerIndex];
    const itemIndex = $('#item').val();
    const selectedItem = items[itemIndex];
    const orderQuantity = parseInt($('#orderQuantity').val());

    if (!selectedCustomer || !selectedItem || isNaN(orderQuantity)) {
        alert('Please select a customer, item, and enter a valid order quantity.');
        return;
    }

    const newOrder = {
        customer: selectedCustomer,
        item: selectedItem,
        orderQuantity: orderQuantity,
        total: selectedItem.price * orderQuantity
    };

    orders.push(newOrder);
    renderOrderTable();
    calculateTotals();
    clearOrderForm();
}

// Function to render the order table
function renderOrderTable() {
    const $tableBody = $('#ordersTable tbody');
    $tableBody.empty();

    orders.forEach(order => {
        const $row = $('<tr>');
        $row.append($('<td>').text(order.customer.id));
        $row.append($('<td>').text(order.customer.name));
        $row.append($('<td>').text(order.item.id));
        $row.append($('<td>').text(order.item.name));
        $row.append($('<td>').text(order.item.price));
        $row.append($('<td>').text(order.orderQuantity));
        $row.append($('<td>').text(order.total.toFixed(2)));

        $tableBody.append($row);
    });
}

// Function to calculate totals
function calculateTotals() {
    let subTotal = 0;
    let total = 0;

    orders.forEach(order => {
        subTotal += order.total;
    });

    const discount = parseFloat($('.input-group input[type="number"]').val()) / 100;
    total = subTotal - (subTotal * discount);

    $('.Th3').text(`Total: Rs.${total.toFixed(2)}`);
    $('.Sh4').text(`SubTotal: Rs.${subTotal.toFixed(2)}`);
}

// Function to clear the order form
function clearOrderForm() {
    $('#customer').val('');
    $('#item').val('');
    $('#orderQuantity').val('');
}

// Event listeners
$('.add-button').on('click', addItemToOrder);
$('.input-group input[type="number"]').on('input', calculateTotals);

// Function to render order history in the modal
function renderOrderHistory() {
    const $viewAllHistoryTableBody = $('#viewAllHistoryTableBody');
    $viewAllHistoryTableBody.empty(); // Clear existing rows

    orders.forEach(order => {
        const $row = $('<tr>');
        $row.append($('<td>').text(order.customer.id));
        $row.append($('<td>').text(order.item.id));
        $row.append($('<td>').text(order.item.name));
        $row.append($('<td>').text(order.orderId)); // Assuming you have an orderId property in the order object
        $row.append($('<td>').text(order.item.price));
        $row.append($('<td>').text(order.orderQuantity));
        $row.append($('<td>').text(order.date)); // Assuming you have a date property in the order object

        $viewAllHistoryTableBody.append($row);
    });
}

// Event listener for View All History modal
$('#viewAllHistoryModal').on('shown.bs.modal', renderOrderHistory);


  /*  let orders = []; // Array to store order data

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


/!*
let orders = []; // Array to store order data
let selectedOrderIndex = -1; // Index of the selected order for update/delete operations

// Function to save a new order
function saveOrder() {
    const orderId = $('#orderId').val();
    const date = $('#date').val();
    const customer = $('#customer').val();
    const name = $('#name').val();
    const address = $('#salary').val();
    const contact = $('#address').val();
    const item = $('#item').val();
    const itemCode = $('#itemCode').val();
    const itemName = $('#itemName4').val();
    const price = $('#price').val();
    const qtyOnH = $('#qtyOnH').val();
    const orderQuantity = $('#orderQuantity').val();

    const newOrder = {
        orderId: orderId,
        date: date,
        customer: customer,
        name: name,
        address: address,
        contact: contact,
        item: item,
        itemCode: itemCode,
        itemName: itemName,
        price: price,
        qtyOnH: qtyOnH,
        orderQuantity: orderQuantity
    };

    orders.push(newOrder);
    clearOrderForm();
    renderOrderTable();
}

// Function to delete an order
function deleteOrder() {
    orders.splice(selectedOrderIndex, 1);
    clearOrderForm();
    renderOrderTable();
}

// Function to clear the order form
function clearOrderForm() {
    $('#orderId').val('');
    $('#date').val('');
    $('#customer').val('');
    $('#name').val('');
    $('#salary').val('');
    $('#address').val('');
    $('#item').val('');
    $('#itemCode').val('');
    $('#itemName4').val('');
    $('#price').val('');
    $('#qtyOnH').val('');
    $('#orderQuantity').val('');
    selectedOrderIndex = -1;
}

// Function to render the order table
function renderOrderTable() {
    const $orderTableBody = $('#ordersTable tbody');
    $orderTableBody.empty();

    orders.forEach(order => {
        const row = `
            <tr>
                <td>${order.itemCode}</td>
                <td>${order.itemName}</td>
                <td>${order.price}</td>
                <td>${order.orderQuantity}</td>
                <td>${order.price * order.orderQuantity}</td>
            </tr>
        `;
        $orderTableBody.append(row);
    });
}

// Event listeners
$('.add-button').on('click', saveOrder);
$('.delete-button').on('click', deleteOrder);

// Initialize
$(document).ready(function () {
    renderOrderTable();
});
*!/

///////////////////////////////////////////////////////////////////////////

/!*
function saveOrder() {
    const orderId = $('#orderId').val();
    const date = $('#date').val();
    const customerIndex = $('#customer').val();
    const selectedCustomer = customers[customerIndex];
    const name = selectedCustomer ? selectedCustomer.name : '';
    const address = selectedCustomer ? selectedCustomer.address : '';
    const contact = selectedCustomer ? selectedCustomer.salary : '';
    const itemIndex = $('#item').val();
    const selectedItem = items[itemIndex];
    const itemCode = selectedItem ? selectedItem.id : '';
    const itemName = selectedItem ? selectedItem.name : '';
    const price = selectedItem ? selectedItem.price : '';
    const qtyOnH = selectedItem ? selectedItem.quantity : '';
    const orderQuantity = $('#orderQuantity').val();

    const newOrder = {
        orderId: orderId,
        date: date,
        customer: selectedCustomer,
        name: name,
        address: address,
        contact: contact,
        item: selectedItem,
        itemCode: itemCode,
        itemName: itemName,
        price: price,
        qtyOnH: qtyOnH,
        orderQuantity: orderQuantity
    };

    orders.push(newOrder);
    clearOrderForm();
    renderOrderTable();
}


// Populate customer dropdown
const $customerDropdown = $('#customer');
$customerDropdown.empty();
$customerDropdown.append($('<option>').val('').text('Select a Customer'));
customers.forEach((customer, index) => {
    $customerDropdown.append($('<option>').val(index).text(`${customer.id} - ${customer.name}`));
});

// Populate item dropdown
const $itemDropdown = $('#item');
$itemDropdown.empty();
$itemDropdown.append($('<option>').val('').text('Select an Item'));
items.forEach((item, index) => {
    $itemDropdown.append($('<option>').val(index).text(`${item.id} - ${item.name}`));
});



function renderOrderTable() {
    const $orderTableBody = $('#ordersTable tbody');
    $orderTableBody.empty();

    orders.forEach(order => {
        const row = `
            <tr>
                <td>${order.customer.id}</td>
                <td>${order.itemCode}</td>
                <td>${order.itemName}</td>
                <td>${order.orderId}</td>
                <td>${order.price}</td>
                <td>${order.orderQuantity}</td>
                <td>${order.date}</td>
            </tr>
        `;
        $orderTableBody.append(row);
    });
}*!/



*/