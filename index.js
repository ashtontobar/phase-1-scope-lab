// Write your solution in this file!

var customerName = 'bob';

function upperCaseCustomerName() {
    console.log(customerName.toUpperCase());
    return customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer = 'not bob';
    return bestCustomer;
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'karen';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'susan';
}