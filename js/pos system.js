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


/*//////////////////////////////////////////////*/

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
    renderCustomerTable();
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
    renderCustomerTable();
}

    // Function to delete a customer
    function deleteCustomer() {
    customers.splice(selectedCustomerIndex, 1);
    clearCustomerForm();
    renderCustomerTable();
}

    // Function to clear the customer form
    function clearCustomerForm() {
    $('#customerId').val('');
    $('#customerName').val('');
    $('#customerAddress').val('');
    $('#customerSalary').val('');
    selectedCustomerIndex = -1;
}

    // Function to render the customer table
    function renderCustomerTable() {
    const $tableBody = $('#customerTable tbody');
    $tableBody.empty();

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

    $tableBody.append($row);
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

    renderCustomerTable(filteredCustomers);
}

    // Event listeners
    $('#newCustomerModal .btn-success').on('click', saveCustomer);
    $('#newCustomerModal .btn-primary').on('click', updateCustomer);
    $('#newCustomerModal .btn-danger').on('click', deleteCustomer);
    $('#newCustomerModal .btn-warning').on('click', clearCustomerForm);
    $('#searchBtn').on('click', searchCustomers);
