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